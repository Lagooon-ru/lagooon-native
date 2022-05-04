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
import {passwordEvent} from "models/auth/event";
import {P1, P3} from 'components/shared/paragraph';
import {validatePassword} from 'utils/helper/validate/password';
import {useNavigation} from "@react-navigation/native";
import SvgPassword from 'components/icon/SvgPassword';
import BackButton from "components/shared/back";

const PasswordScreen: FC = () => {
  const password = useStore($input).password;
  const navigation: any = useNavigation()
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const keyboardHeight = useKeyboard();

  const nextHandler = () => {
    navigation.navigate('UsernameScreen')
  }

  return (
    <SafeArea bg={Colors.black}>
      <Container height={keyboard ? hp(100) - keyboardHeight : hp(100)}>
        <BackButton/>
        <Box flex={1} pt={keyboard ? px(34) : px(84)} pb={px(84)}>
          <Box align='center'>
            <SvgPassword size={px(100)}/>
            <Box mt={px(24)}>
              <P1 color={Colors.white}>Придумай Пароль</P1>
            </Box>
            <Box mt={keyboard ? px(30) : px(60)}>
              <Input
                onKeyboardAppear={() => {
                  setKeyboard(true)
                }}
                onKeyboardDisappear={() => {
                  setKeyboard(false)
                }}
                value={password}
                secureTextEntry
                onChangeText={passwordEvent}
                placeholder='Пароль'
              />
              {
                password.length > 0 && !validatePassword(password) && (
                  <Box ph={px(13)} pt={px(7)}>
                    <P3 color={Colors.orange}>
                      Минимум восемь символов, минимум одна буква,
                      одна цифра и один специальный символ
                    </P3>
                  </Box>
                )
              }
            </Box>
          </Box>
          <Box>
            <Button
              block
              text='Далее'
              theme='orange'
              disabled={!validatePassword(password)}
              onPress={nextHandler}
            />
          </Box>
        </Box>
      </Container>
    </SafeArea>
  );
};

export default PasswordScreen;