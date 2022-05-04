import React, {FC, useState} from 'react';
import SafeArea from 'components/shared/paper/SafeArea';
import Container from "components/shared/paper/Container";
import Input from "components/shared/input/Input";
import Colors from "utils/helper/style/color";
import Box from "components/shared/paper/Box";
import {hp, px, rs} from "utils/helper/style/mixins";
import {useKeyboard} from "utils/helper/style/keyboard";
import Button from "components/shared/input/button";
import {loginEvent} from "models/auth/event";
import {P1} from 'components/shared/paragraph';
import BackButton from "components/shared/back";
import {useLoginMutation} from "api/graphql";
import {Alert} from "react-native";
import SvgLogo from "components/icon/SvgLogo";
import {Loader} from "components/shared/loader";
import {validatePassword} from "utils/helper/validate/password";
import {useNavigation} from "@react-navigation/native";

const LoginScreen: FC = () => {
  const navigation: any = useNavigation();
  const [login] = useLoginMutation();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const keyboardHeight = useKeyboard();

  const signHandler = () => {
    setLoading(true)
    const login_options = {
      variables: {
        arg: {
          user: user,
          password: password
        },
      },
    };

    login(login_options)
      .then(({ data }) => {
        loginEvent(data.login);
      })

      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка входа.', err.message);
      })

      .finally(() => {
        setLoading(false);
      });
  }

  const forgetHandler = () => {
    navigation.navigate('ForgetScreen')
  }

  return (
    <SafeArea bg={Colors.black}>
      <Container height={keyboard ? hp(100) - keyboardHeight : hp(100)}>
        <BackButton/>
        <Box flex={1} pt={px(84)} pb={px(84)}>
          <Box align='center'>
            {
              !keyboard && (
                <Box align='center'>
                  <SvgLogo size={px(80)}/>
                  <Box mt={px(50)}>
                    <P1 color={Colors.white}>Авторизация</P1>
                  </Box>
                </Box>
              )
            }
            <Box mt={keyboard ? 0 : px(60)}>
              <Input
                onKeyboardAppear={() => {setKeyboard(true)}}
                onKeyboardDisappear={() => {setKeyboard(false)}}
                value={user}
                placeholder='Email'
                onChangeText={setUser}
              />
              <Input
                onKeyboardAppear={() => {setKeyboard(true)}}
                onKeyboardDisappear={() => {setKeyboard(false)}}
                value={password}
                placeholder='Пароль'
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </Box>
          </Box>
          <Box mt={px(10)}>
            <Box mb={px(10)}>
              <Button
                block
                text='Забыли пароль?'
                theme='reverseOrange'
                onPress={forgetHandler}
              />
            </Box>
            {
              loading ? (
                <Box align='center' height={px(60)} justify='center'>
                  <Loader size={px(32)}/>
                </Box>
              ) : (
                <Button
                  block
                  text='Войти'
                  theme='orange'
                  onPress={signHandler}
                  loading={loading}
                  disabled={user.length < 7 || !validatePassword(password)}
                />
              )
            }
          </Box>
        </Box>
      </Container>
    </SafeArea>
  );
};

export default LoginScreen;