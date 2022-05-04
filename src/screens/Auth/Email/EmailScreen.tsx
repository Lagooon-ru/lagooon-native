import React, {FC, useState} from 'react';
import {Text} from "react-native";
import {useStore} from "effector-react";
import {$input} from "models/auth/state";
import {useNavigation} from "@react-navigation/native";
import {hp, px, rs, scaleFont} from "utils/helper/style/mixins";
import {useKeyboard} from "utils/helper/style/keyboard";
import SafeArea from "components/shared/paper/SafeArea";
import Container from "components/shared/paper/Container";
import { H1 } from 'components/shared/heading/Title';
import Box from "components/shared/paper/Box";
import Input from "components/shared/input/Input";
import Button from "components/shared/input/button";
import Checkbox from 'components/shared/input/checkbox';
import Link from "components/shared/link";
import { emailEvent } from 'models/auth/event';
import { validateEmail } from 'utils/helper/validate/email';
import SvgLogo from 'components/icon/SvgLogo';

const EmailScreen: FC = () => {
  const email = useStore($input).email;
  const navigation: any = useNavigation()
  const keyboardHeight=  useKeyboard();
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [accepted, setAccepted] = useState<boolean>(false);

  const privacyHandler = () => {
    console.log('privacy')
  }

  const loginHandler = () => {
    navigation.navigate('LoginScreen')
  }

  const nextHandler = () => {
    navigation.navigate('PasswordScreen')
  }

  return (
    <SafeArea>
      <Container
        height={keyboard ? hp(100) - keyboardHeight : hp(100)}
      >
        <Box pt={px(84)} pb={px(70)} flex={1}>
          {!keyboard && (
            <Box align='center'>
              <SvgLogo size={px(80)}/>
              <Box mt={px(32)}>
                <H1 textAlign='center'>
                  <Text>
                    Ты всего в одном шаге от
                  </Text>
                  &nbsp;
                  <Text style={{color: '#FE7E03'}}>
                    популярности
                  </Text>
                </H1>
              </Box>
            </Box>
          )}
          <Box align='center'>
            <Box>
              <Input
                autoCapitalize='none'
                onChangeText={emailEvent}
                placeholder='Email'
                keyboardType='email-address'
                label='Быстрая регистрация'
                value={email}
                onKeyboardAppear={() => {setKeyboard(true)}}
                onKeyboardDisappear={() => {setKeyboard(false)}}
              />
            </Box>
            <Box mt={px(14)}>
              <Checkbox
                label={
                  <Text>
                    Я ознакомился и принимаю условия
                    <Link onPress={privacyHandler}>Пользовательского соглашения</Link>
                  </Text>
                }
                check={accepted}
                setCheck={setAccepted}
              />
            </Box>
          </Box>
          <Box align='center'>
            <Box>
              <Button
                block
                text='Уже есть аккаунт'
                theme='reverseOrange'
                onPress={loginHandler}
              />
              <Button
                block
                text='Далее'
                theme='orange'
                style={{marginTop: px(14)}}
                disabled={!accepted || !validateEmail(email)}
                onPress={nextHandler}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </SafeArea>
  );
};

export default EmailScreen;