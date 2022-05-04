import React, {FC, useState} from 'react';
import SafeArea from 'components/shared/paper/SafeArea';
import Container from "components/shared/paper/Container";
import Input from "components/shared/input/Input";
import Colors from "utils/helper/style/color";
import Box from "components/shared/paper/Box";
import {hp, px} from "utils/helper/style/mixins";
import {useKeyboard} from "utils/helper/style/keyboard";
import Button from "components/shared/input/button";
import {useStore} from "effector-react";
import {$input} from "models/auth/state";
import {bioEvent, signupEvent} from "models/auth/event";
import {P1, P3} from 'components/shared/paragraph';
import ProfilePreview from "components/screen/auth/ProfilePreview";
import BackButton from "components/shared/back";
import SvgBio from "components/icon/SvgBio";
import {useSignupMutation} from "api/graphql";
import {Alert} from "react-native";

const BioScreen: FC = () => {
  const [signup] = useSignupMutation();
  const bio = useStore($input).bio;
  const input: any = useStore($input);
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const keyboardHeight = useKeyboard();

  const signupHandler = () => {
    const options: any = {
      variables: {
        arg: {
          ...input,
          avatar: input.avatar.id
        }
      }
    }

    setLoading(true)
    signup(options)
      .then(({data}) =>{
        signupEvent(data.signup);
      })
      .catch((err) =>{
        Alert.alert('Ошибка регистрации.', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <SafeArea bg={Colors.black}>
      <Container height={keyboard ? hp(100) - keyboardHeight - px(280) : hp(100) - px(280)}>
        <BackButton/>
        <Box flex={1} pt={keyboard ? px(54) : px(84)} pb={px(84)}>
          <Box align='center'>
            {
              !keyboard && (
                <Box align='center'>
                  <SvgBio size={px(100)}/>
                  <Box mt={px(24)}>
                    <P1 color={Colors.white}>Придумай описание{`\n`}для своего профиля</P1>
                  </Box>
                </Box>
              )
            }
            <Box mt={keyboard ? 0 : px(60)}>
              <Input
                onKeyboardAppear={() => {setKeyboard(true)}}
                onKeyboardDisappear={() => {setKeyboard(false)}}
                value={bio}
                placeholder='Описание'
                onChangeText={bioEvent}
              />
            </Box>
            <Box mt={10}>
              <Button
                block
                text='Готово'
                theme='orange'
                onPress={signupHandler}
                loading={loading}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <ProfilePreview/>
    </SafeArea>
  );
};

export default BioScreen;