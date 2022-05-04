import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";
import Avatar from "components/shared/avatar";
import {H3} from 'components/shared/heading/Title';
import {P2} from 'components/shared/paragraph';
import Box from "components/shared/paper/Box";
import {px} from "utils/helper/style/mixins";

interface Props {
  profile?: any;
}

const ProfileHeader: FC<Props> = (props) => {
  const {profile} = props;
  return (
    <View style={styles.wrap}>
      <View style={styles.item}>
        <H3>{profile?.follow?.length || 0}</H3>
        <Box mt={4}>
          <P2>Подписчики</P2>
        </Box>
      </View>
      <Avatar bordered active size={px(80)} url={profile?.avatar?.path}/>
      <View style={styles.item}>
        <H3>{profile?.follow?.length || 0}</H3>
        <Box mt={px(4)}>
          <P2>Подписки</P2>
        </Box>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: px(24)
  },
  item: {
    width: px(120),
    height: px(80),
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ProfileHeader;