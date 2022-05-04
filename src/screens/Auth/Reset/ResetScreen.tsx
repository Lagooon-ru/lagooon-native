import React, {FC, useState} from 'react';
import { Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {hp} from "utils/helper/style/mixins";
import {useKeyboard} from "utils/helper/style/keyboard";
import SafeArea from "components/shared/paper/SafeArea";
import Container from "components/shared/paper/Container";
import {H1} from 'components/shared/heading/Title';
import Box from "components/shared/paper/Box";
import Input from "components/shared/input/Input";
import Button from "components/shared/input/button";
import {validateEmail} from 'utils/helper/validate/email';
import SvgLogo from 'components/icon/SvgLogo';
import BackButton from "components/shared/back";
import { validatePassword } from 'utils/helper/validate/password';

const ResetScreen: FC = () => {
  const navigation: any = useNavigation()
  const keyboardHeight = useKeyboard();
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');

  const nextHandler = () => {

  }

  return (
    <SafeArea>
      <Container
        height={keyboard ? hp(100) - keyboardHeight : undefined}
      >
        <BackButton light/>
        <Box pt={84} pb={84} flex={1}>
          <Box align='center'>
            <SvgLogo size={80}/>
            <Box mt={45}>
              <H1 textAlign='center'>
                <Text>
                  Введите
                </Text>
                &nbsp;
                <Text style={{color: '#FE7E03'}}>
                  новый пароль
                </Text>
              </H1>
            </Box>
            <Box mt={12}>
              <Input
                secureTextEntry
                autoCapitalize='none'
                onChangeText={setPassword}
                placeholder='Новый пароль'
                value={password}
                onKeyboardAppear={() => {
                  setKeyboard(true)
                }}
                onKeyboardDisappear={() => {
                  setKeyboard(false)
                }}
              />
              <Input
                secureTextEntry
                autoCapitalize='none'
                onChangeText={setConfirm}
                placeholder='Повторите новый пароль'
                value={confirm}
                onKeyboardAppear={() => {
                  setKeyboard(true)
                }}
                onKeyboardDisappear={() => {
                  setKeyboard(false)
                }}
              />
            </Box>
          </Box>
          <Box align='center'>
            <Box>
              <Button
                block
                text='Отправить'
                theme='orange'
                style={{marginTop: 14}}
                disabled={!validatePassword(password) || password !== confirm}
                onPress={nextHandler}
                loading={loading}

              />
            </Box>
          </Box>
        </Box>
      </Container>
    </SafeArea>
  );
};

export default ResetScreen;