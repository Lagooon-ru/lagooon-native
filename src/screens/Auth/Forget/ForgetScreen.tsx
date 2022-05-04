import React, {FC, useState} from 'react';
import {Alert, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {hp, px} from "utils/helper/style/mixins";
import {useKeyboard} from "utils/helper/style/keyboard";
import SafeArea from "components/shared/paper/SafeArea";
import Container from "components/shared/paper/Container";
import {H1} from 'components/shared/heading/Title';
import Box from "components/shared/paper/Box";
import Input from "components/shared/input/Input";
import Button from "components/shared/input/button";
import {validateEmail} from 'utils/helper/validate/email';
import SvgLogo from 'components/icon/SvgLogo';
import { useForgetMutation } from 'api/graphql';
import BackButton from "components/shared/back";

const ForgetScreen: FC = () => {
  const [forgetMutation] = useForgetMutation();
  const navigation: any = useNavigation()
  const keyboardHeight = useKeyboard();
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const nextHandler = () => {
    setLoading(true);
    const options = {
      variables: {
        email: email.trim(),
      },
    };
    forgetMutation(options)
      .then(({ data }) => {
        navigation.navigate('LoginScreen');
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка регистрации.', err.message);
        setLoading(false)
      });
}

  return (
    <SafeArea>
      <Container
        height={keyboard ? hp(100) - keyboardHeight : hp(100)}
      >
        <BackButton light/>
        <Box pt={px(84)} pb={px(84)} flex={1}>
          <Box align='center'>
            <SvgLogo size={80}/>
            <Box mt={45}>
              <H1 textAlign='center'>
                <Text>
                  Для восстановления пароля введи
                </Text>
                &nbsp;
                <Text style={{color: '#FE7E03'}}>
                  почту
                </Text>
              </H1>
            </Box>
            <Box mt={px(12)}>
              <Input
                autoCapitalize='none'
                onChangeText={setEmail}
                placeholder='Email'
                keyboardType='email-address'
                value={email}
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
                style={{marginTop: px(14)}}
                disabled={!validateEmail(email)}
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

export default ForgetScreen;