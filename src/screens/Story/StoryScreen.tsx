import React, {FC, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import SafeArea from "components/shared/paper/SafeArea";
import {useStoryOfUserMutation} from "api/graphql";
import Colors from "utils/helper/style/color";
import {fullHeight, fullWidth, px} from "utils/helper/style/mixins";
import Box from 'components/shared/paper/Box';
import IconButton from "components/shared/input/iconButton";
import Icon from 'components/icon';
import {Image, ScrollView, TextInput} from "react-native";
import BackButton from "components/shared/back";
import {PageLoader} from "components/shared/loader";
import {H5} from "components/shared/heading/Title";
import Wrap from "components/shared/paper/Wrap";

interface Props {
  route?: any;
}

const StoryScreen: FC<Props> = (props) => {
  const {route} = props;
  const [storyOfUserMutation] = useStoryOfUserMutation();
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyboard, setKeyboard] = useState<boolean>(false);

  useEffect(() => {
    if (!!route.params.uid) {
      const options = {
        variables: {
          arg: {id: route.params.uid}
        }
      }

      setLoading(true)
      storyOfUserMutation(options)
        .then(({data}) => {
          setStories(data.storyOfUser)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [route])

  return (
    <SafeArea
      bg={Colors.black}
    >
      <Box>
        <BackButton
          top={px(32)}
        />
        {
          loading ? (
              <PageLoader/>
            ) :
            stories.length === 0 ? (
              <Box
                height={fullHeight()}
                align='center'
                justify='center'
              >
                <H5 color={Colors.white}>
                  Пока нет публикаций
                </H5>
              </Box>
            ) : (
              <ScrollView
                horizontal={true}
                pagingEnabled={true}
              >
                {
                  stories.map((story) =>
                    (
                      <Box key={story.id}>
                        <Box>
                          <Image
                            source={{uri: story.photos[0].path}}
                            width={fullWidth()}
                            height={keyboard ? px(100) : (fullHeight() - px(100))}
                            style={{
                              width: fullWidth(),
                              height: keyboard ? fullWidth() : (fullHeight() - px(100)),
                              borderBottomLeftRadius: px(15),
                              borderBottomRightRadius: px(15)
                            }}
                          />
                        </Box>
                        <Box
                          height={px(100)}
                          direction='row'
                          align='center'
                          justify='center'
                        >
                          <Box>
                            <TextInput
                              style={styles.input}
                              placeholder='Отправить сообщение'
                              placeholderTextColor={Colors.white}
                              onFocus={() => {
                                setKeyboard(true)
                              }}
                              onBlur={() => {
                                setKeyboard(false)
                              }}
                            />
                          </Box>
                          <Box
                            ml={px(8)}
                          >
                            <IconButton
                              size={px(32)}
                            >
                              <Icon
                                active
                                name='send'
                                width={px(32)}
                                height={px(32)}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    ))
                }
              </ScrollView>
            )
        }
      </Box>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  input: {
    width: fullWidth() - px(72),
    borderColor: '#666666',
    borderWidth: px(1),
    height: px(50),
    borderRadius: px(30),
    paddingHorizontal: px(24),
    color: Colors.white
  },
})

export default StoryScreen;