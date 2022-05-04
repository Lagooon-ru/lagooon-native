import React, {FC} from 'react';
import Box from "components/shared/paper/Box";
import {P1, P2} from 'components/shared/paragraph';
import {H4} from "components/shared/heading/Title";

interface Props {
  profile?: any;
}

const ProfileDetails: FC<Props> = (props) => {
  const {profile} = props;
  return (
    <Box>
      <Box height={40} ph={16} justify='center' align='center'>
        <P2>@{profile.username || ""}</P2>
      </Box>
      <Box height={25} ph={16} justify='center'>
        <H4>{profile.name || ""}</H4>
      </Box>
      <Box height={25} ph={16} mb={12} justify='center'>
        <P1>{profile.bio || ""}</P1>
      </Box>
    </Box>
  );
};

export default ProfileDetails;