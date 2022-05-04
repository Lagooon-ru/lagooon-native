import React, {FC, useEffect, useState} from 'react';
import SafeArea from "components/shared/paper/SafeArea";
import ProfileGrid from "components/screen/profile/ProfileGrid/ProfileGrid";
import ProfileDetails from 'components/screen/profile/ProfileDetails';
import ProfileHeader from 'components/screen/profile/ProfileHeader';
import Box from "components/shared/paper/Box";
import Colors from "utils/helper/style/color";
import Wrap from 'components/shared/paper/Wrap';
import {useUserMutation} from "api/graphql";
import { PageLoader } from 'components/shared/loader';
import ProfileFollow from 'components/screen/profile/ProfileFollow';

interface Props {
  navigation: any;
  route?: any;
}

const UserScreen: FC<Props> = (props) => {
  const [userMutation] = useUserMutation()
  const {route} = props;
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() =>{
    if(!!route.params?.uid) {
      const option = {
        variables: {
          search: {
            id: route.params.uid
          },
        },
      };
      userMutation(option)
        .then(({ data }: any) => {
          setProfile(data.user);
          setLoading(false)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [route])

  return (
    <SafeArea bg={Colors.white}>
      <Wrap>
        {
          loading ? (
            <PageLoader/>
          ) : (
            <Box flex={1}>
              <ProfileHeader profile={profile}/>
              <ProfileDetails profile={profile}/>
              <ProfileFollow profile={profile} setProfile={setProfile}/>
              <ProfileGrid profile={profile}/>
            </Box>
          )
        }
      </Wrap>
    </SafeArea>
  );
};

export default UserScreen;