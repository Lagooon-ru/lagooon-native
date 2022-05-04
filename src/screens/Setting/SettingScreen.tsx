import React, {FC, useEffect, useState} from 'react';
import SafeArea from "components/shared/paper/SafeArea";
import BackButton from "components/shared/back";
import Input from "components/shared/input/Input";
import Box from 'components/shared/paper/Box';
import Container from "components/shared/paper/Container";
import Colors from "utils/helper/style/color";
import Button from 'components/shared/input/button';
import {useStore} from "effector-react";
import {$auth, $input} from "models/auth/state";
import {avatarEvent, bioEvent, emailEvent, nameEvent, updateProfileEvent, usernameEvent} from "models/auth/event";
import Avatar from "components/shared/avatar";
import { P1 } from 'components/shared/paragraph';
import {useGallery} from "utils/helper/gallery";
import { uploadImage } from 'api';
import { useProfileUpdateMutation } from 'api/graphql';
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native";
import Wrap from 'components/shared/paper/Wrap';

const SettingScreen: FC = () => {
  const auth: any = useStore($auth);
  const input: any = useStore($input);
  const { open } = useGallery([1, 1]);
  const [profileUpdateMutation] = useProfileUpdateMutation();
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await open();
    if(!result.cancelled) {
      const uri = result.uri;
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
      const formData: any = new FormData();
      formData.append('media', {
        uri: result.uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.token}`,
        },
      };
      setLoading(true)
      uploadImage(formData, config)
        .then(({ data }) => {
          avatarEvent(data)
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }

  const updateProfileHandler = () => {
    setLoading(true);
    const options = {
      variables: {
        arg: {
          username: input.username !== auth.profile.username ? input.username : undefined,
          name: input.name !== auth.profile.name ? input.name : undefined,
          email: input.email !== auth.profile.email ? input.email : undefined,
          bio: input.bio !== auth.profile.bio ? input.bio : undefined,
          avatar: input.avatar?.id !== auth.profile.avatar?.id ? input.avatar.id : undefined,
        },
      },
    };


    profileUpdateMutation(options)
      .then(({ data }) => {
        updateProfileEvent(data.profileUpdate);
        navigation.navigate('ProfileScreen', { refresh: true });
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() =>{
    usernameEvent(auth.profile.username)
    nameEvent(auth.profile.name)
    emailEvent(auth.profile.email)
    bioEvent(auth.profile.bio)
    avatarEvent(auth.profile.avatar)
  }, [auth])

  return (
    <SafeArea bg={Colors.white}>
      <Container>
        <Wrap>
          <BackButton light/>
          <Box align='center' mt={18} mb={13}>
            <P1>Профиль</P1>
          </Box>
          <ScrollView style={{flex: 1}}>
            <Box align='center' mb={32}>
              <Avatar
                bordered
                url={input.avatar?.path}
                active
                edit
                onEdit={pickImage}
                size={88}
              />
            </Box>
            <Box>
              <Input
                placeholder='Ваше имя'
                textContentType='name'
                value={input.name}
                onChangeText={nameEvent}
              />
            </Box>
            <Box>
              <Input
                placeholder='Имя пользователя'
                value={input.username}
                onChangeText={usernameEvent}
              />
            </Box>
            <Box>
              <Input
                placeholder='E-mail'
                value={input.email}
                onChangeText={emailEvent}
              />
            </Box>
            <Box>
              <Input
                placeholder='О себе'
                multiline={true}
                numberOfLines={4}
                value={input.bio}
                onChangeText={bioEvent}
              />
            </Box>
            <Box mt={14}>
              <Button
                text='Сохранить'
                theme='orange'
                loading={loading}
                onPress={updateProfileHandler}
              />
            </Box>
            <Box mt={12}>
              <Button
                text='Выйти'
                theme='reverseOrange'
                onPress={navigation.goBack}
              />
            </Box>
          </ScrollView>
        </Wrap>
      </Container>
    </SafeArea>
  );
};

export default SettingScreen;