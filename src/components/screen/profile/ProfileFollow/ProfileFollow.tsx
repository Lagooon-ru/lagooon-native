import React, {FC} from 'react';
import {useFollowMutation, useProfileRetrieveMutation, UserEntity} from "api/graphql";
import Box from "components/shared/paper/Box";
import Button from 'components/shared/input/button';
import {useStore} from "effector-react";
import {$auth} from "models/auth/state";
import Container from "components/shared/paper/Container";
import {loginEvent} from "models/auth/event";

interface Props {
  profile: UserEntity;
  setProfile: (value: UserEntity) => void;
}

const ProfileFollow: FC<Props> = (props) => {
  const {profile, setProfile} = props;
  const auth: any = useStore($auth);
  const [followMutation] = useFollowMutation();
  const [profileRetrieve] = useProfileRetrieveMutation()

  const followHandler = (value: boolean) => {
    const options = {
      variables: {
        follow: {
          follower: profile.id,
          following: value,
        },
      },
    };
    followMutation(options)
      .then(({ data }) => {
        console.log(data)
        data.follow.status ?
          setProfile({...profile, follow: [...profile.follow, auth.profile]}):
          setProfile({...profile, follow: profile.follow.filter((i)=>i.id !== auth.profile.id)});
        profileRetrieve()
          .then(({ data }) =>
          {
            loginEvent(data.profileRetrieve);
          })
          .catch(err =>
          {
            console.log(err);
          })

      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <Box>
        {
          profile.follow.filter((i) => i.id === auth.profile.id).length > 0 ? (
            <Button
              theme='profileSubscribed'
              size='md'
              text='Вы подписаны'
              suffixIcon='chevron-down'
              onPress={()=>{followHandler(false)}}
            />
          ) : (
            <Button
              theme='profileDefault'
              size='md'
              text='Подписаться'
              onPress={()=>{followHandler(true)}}
            />
          )
        }
      </Box>
    </Container>
  );
};

export default ProfileFollow;