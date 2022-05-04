import React, {FC} from 'react';
import SafeArea from 'components/shared/paper/SafeArea';
import Container from "components/shared/paper/Container";
import Colors from "utils/helper/style/color";
import Box from "components/shared/paper/Box";
import {hp, px} from "utils/helper/style/mixins";
import Button from "components/shared/input/button";
import {useStore} from "effector-react";
import {$input} from "models/auth/state";
import {P1} from 'components/shared/paragraph';
import {useNavigation} from "@react-navigation/native";
import ProfilePreview from "components/screen/auth/ProfilePreview";
import SvgPhoto from "components/icon/SvgPhoto";
import BackButton from "components/shared/back";

const PhotoScreen: FC = () => {
  const avatar = useStore($input).avatar;
  const navigation: any = useNavigation()

  const nextHandler = () => {
    navigation.navigate('BioScreen')
  }

  return (
    <SafeArea bg={Colors.black}>
      <Container height={ hp(100) - px(280)}>
        <BackButton/>
        <Box flex={1} pt={px(84)} pb={px(84)}>
          <Box align='center'>
            <Box align='center'>
              <SvgPhoto size={px(100)}/>
              <Box mt={px(24)}>
                <P1 color={Colors.white}>Добавь фото для Профиля</P1>
              </Box>
            </Box>
            <Box mt={px(60)}>
              <Button
                block
                text='Выбрать фото'
                theme='reverseOrange'
                onPress={nextHandler}
              />
            </Box>
            <Box mt={10}>
              <Button
                block
                text='Далее'
                theme='orange'
                disabled={!avatar}
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

export default PhotoScreen;