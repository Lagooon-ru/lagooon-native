import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Colors from 'utils/helper/style/color';
import Box from "components/shared/paper/Box";
import {P1, P2 } from 'components/shared/paragraph';
import { H4 } from 'components/shared/heading/Title';
import {useStore} from "effector-react";
import {$input} from "models/auth/state";
import GridPlaceholder from "components/shared/placeholder/GridPlaceholder";
import ProfileHeader from 'components/screen/profile/ProfileHeader';
import ProfileGridHeader from "components/screen/profile/ProfileGridHeader";
import {px} from "utils/helper/style/mixins";

const ProfilePreview: FC = () => {
  const input = useStore($input);
  return (
    <View style={styles.wrap}>
      <ProfileHeader/>
      <Box height={px(40)} ph={px(16)} justify='center' align='center'>
        <P2>@{input.username}</P2>
      </Box>
      <Box height={px(32)} ph={px(16)} justify='center'>
        <H4>{input.name}</H4>
      </Box>
      <Box height={px(30)} ph={px(16)} justify='center'>
        <P1>{input.bio}</P1>
      </Box>
      <Box>
        <ProfileGridHeader disable/>
        <GridPlaceholder/>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.white,
    height: 280,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 17
  }
})

export default ProfilePreview;