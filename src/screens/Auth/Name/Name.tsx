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
import {nameEvent} from "models/auth/event";
import {P1, P3} from 'components/shared/paragraph';
import {useNavigation} from "@react-navigation/native";
import ProfilePreview from "components/screen/auth/ProfilePreview";
import { validateName } from 'utils/helper/validate/name';
import BackButton from "components/shared/back";
import SvgName from "components/icon/SvgName";

const NameScreen: FC = () => {
  const name = useStore($input).name;
  const navigation: any = useNavigation()
  const [keyboard, setKeyboard] = useState<boolean>(false);
  const keyboardHeight = useKeyboard();

  const nextHandler = () => {
    navigation.navigate('PhotoScreen')
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
                  <SvgName size={px(100)}/>
                  <Box mt={px(24)}>
                    <P1 color={Colors.white}>Добавь Имя</P1>
                  </Box>
                </Box>
              )
            }
            <Box mt={keyboard ? 0 : 60}>
              <Input
                onKeyboardAppear={() => {setKeyboard(true)}}
                onKeyboardDisappear={() => {setKeyboard(false)}}
                value={name}
                placeholder='Никнейм'
                onChangeText={nameEvent}
              />
              {
                name.length > 0 && !validateName(name) && (
                  <Box ph={px(13)} pt={px(7)}>
                    <P3 color={Colors.orange}>
                      At Least 8 letters
                    </P3>
                  </Box>
                )
              }
            </Box>
            <Box mt={px(10)}>
              <Button
                block
                text='Далее'
                theme='orange'
                disabled={!validateName(name)}
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

export default NameScreen;