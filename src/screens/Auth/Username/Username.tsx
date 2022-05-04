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
import {usernameEvent} from "models/auth/event";
import {P1, P3} from 'components/shared/paragraph';
import {useNavigation} from "@react-navigation/native";
import { validateUsername } from 'utils/helper/validate/username';
import ProfilePreview from "components/screen/auth/ProfilePreview";
import SvgUsername from 'components/icon/SvgUsername';
import BackButton from "components/shared/back";

const UsernameScreen: FC = () => {
  const username = useStore($input).username;
  const navigation: any = useNavigation()
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const keyboardHeight = useKeyboard();

  const nextHandler = () => {
    navigation.navigate('NameScreen')
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
                  <SvgUsername size={px(100)}/>
                  <Box mt={24}>
                    <P1 color={Colors.white}>Придумай Никнейм</P1>
                  </Box>
                </Box>
              )
            }
            <Box mt={keyboard ? 0 : px(60)}>
              <Input
                onKeyboardAppear={() => {setKeyboard(true)}}
                onKeyboardDisappear={() => {setKeyboard(false)}}
                value={username}
                placeholder='Никнейм'
                onChangeText={usernameEvent}
              />
              {
                username.length > 0 && !validateUsername(username) && (
                  <Box ph={px(13)} pt={px(7)}>
                    <P3 color={Colors.orange}>
                      Минимум восемь символов, английские строчные буквы и число:
                      например, lagooon123.
                    </P3>
                  </Box>
                )
              }
            </Box>
            <Box mt={10}>
              <Button
                block
                text='Далее'
                theme='orange'
                disabled={!validateUsername(username)}
                onPress={nextHandler}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <ProfilePreview/>
    </SafeArea>
  );
};

export default UsernameScreen;