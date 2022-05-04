import React, {FC} from 'react';
import {useStore} from "effector-react";
import SafeArea from "components/shared/paper/SafeArea";
import ProfileGrid from "components/screen/profile/ProfileGrid/ProfileGrid";
import ProfileDetails from 'components/screen/profile/ProfileDetails';
import ProfileHeader from 'components/screen/profile/ProfileHeader';
import {$auth} from "models/auth/state";
import Box from "components/shared/paper/Box";
import ProfileAction from 'components/screen/profile/ProfileAction';
import Colors from "utils/helper/style/color";
import Wrap from 'components/shared/paper/Wrap';

interface Props {
  navigation: any;
  route?: any;
}

const ProfileScreen: FC<Props> = (props) => {
  const profile = useStore($auth).profile


  return (
    <SafeArea bg={Colors.white}>
      <Wrap>
        <Box flex={1}>
          <ProfileAction/>
          <ProfileHeader profile={profile}/>
          <ProfileDetails profile={profile}/>
          <ProfileGrid profile={profile}/>
        </Box>
      </Wrap>
    </SafeArea>
  );
};

export default ProfileScreen;