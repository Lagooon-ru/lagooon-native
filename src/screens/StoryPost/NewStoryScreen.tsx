import React, {FC, useEffect, useState} from 'react';
import SafeArea from 'components/shared/paper/SafeArea';
import Box from 'components/shared/paper/Box';
import Colors from "utils/helper/style/color";
import { H1 } from 'components/shared/heading/Title';
import {Image, View} from "react-native";
import {fullHeight, fullWidth, px } from 'utils/helper/style/mixins';
import Input from "components/shared/input/Input";
import Container from 'components/shared/paper/Container';
import Button from 'components/shared/input/button';
import { P1 } from 'components/shared/paragraph';
import BackButton from "components/shared/back";
import {useStore} from "effector-react";
import { $auth } from 'models/auth/state';
import {uploadImage} from "api/index";
import {useFeedCreateMutation} from "api/graphql";
import {useNavigation} from "@react-navigation/native";

interface Props {
  route?: any;
}

const NewStoryScreen: FC<Props> = (props) => {
  const {route} = props;
  const navigation: any = useNavigation();
  const [feedCreate] = useFeedCreateMutation();
  const [source, setSource] = useState<any>(null);
  const [type, setType] = useState<string>('image');
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [caption, setCaption] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useStore($auth);

  useEffect(() => {
    if(!!route.params) {
      setSource(route.params.source)
      setType(route.params.type)
    }
  }, [route])

  const postHandler = () => {
    const uri = source.uri;
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];
    const formData: any = new FormData();
    formData.append('media', {
      uri: uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${auth.token}`,
      },
    };

    setLoading(true);
    uploadImage(formData, config)
      .then(res => {
        if (!!res.data.id) {
          const opt = {
            variables: {
              feed: {
                photos: [res.data.id],
                caption: caption,
              },
            },
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          };

          feedCreate(opt)
            .then(re => {
              console.log(re)
              navigation.navigate('FeedTab');
            })
            .catch(err => {
              console.log(err);
            })
            .finally(() => {
              setLoading(false);
            });
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <SafeArea bg={Colors.white}>
      <Box
        width={fullWidth()}
        height={fullHeight()}
      >
        <BackButton light/>
        <Box>
          <Box
            ph={px(26)}
            pv={px(12)}
          >
            <P1 textAlign="center" color={Colors.black}>Новая публикация</P1>
          </Box>
          <Box>
            {
              type === 'image' ? (
                <Image
                  source={source}
                  width={fullWidth()}
                  height={fullWidth()}
                  style={{width: fullWidth(), height: fullWidth()}}
                />
              ) : (
                <View/>
              )
            }
          </Box>
          <Box
            ph={px(16)}
          >
            <Input
              multiline
              numberOfLines={2}
              value={caption}
              onChangeText={setCaption}
              onKeyboardAppear={() => {setKeyboard(true)}}
              onKeyboardDisappear={() => {setKeyboard(false)}}
            />
          </Box>
          <Box
            ph={px(16)}
            pv={px(12)}
          >
            <Button
              theme='profileDefault'
              text='Опубликовать сейчас'
              onPress={postHandler}
              loading={loading}
            />
          </Box>
        </Box>
      </Box>
    </SafeArea>
  );
};

export default NewStoryScreen;