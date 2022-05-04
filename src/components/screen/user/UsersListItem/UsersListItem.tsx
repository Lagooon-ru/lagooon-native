import React, {FC} from 'react';
import {useNavigation} from "@react-navigation/native";

import Container from "components/shared/paper/Container";
import {H4, H5} from "components/shared/heading/Title";
import Box from "components/shared/paper/Box";
import Avatar from "components/shared/avatar";
import {P2} from 'components/shared/paragraph';
import Touch from "components/shared/paper/Touch";

import Colors from "utils/helper/style/color";
import {px, rs} from "utils/helper/style/mixins";

import {UserEntity} from "api/graphql";

interface Props {
  user: UserEntity
}

const UsersListItem: FC<Props> = (props) => {
  const navigation: any = useNavigation();
  const {user} = props
  const userActionHandler = () =>
  {
    navigation
      .navigate( "UserScreen", {
        uid: user.id
      })
  }
  return (
    <Container>
      <Touch
        onPress={userActionHandler}
        direction='row'
        justify='flex-start'
        align='center'
        mv={12}
      >
        <Box
          mr={px(12)}
        >
          <Avatar
            active
            bordered
            size={px(60)}
            url={user.avatar?.path}
          />
        </Box>
        <Box key={user.id}>
          <Box
            mb={px(3)}
          >
            <H5>
              {user.name.substring(0, 20)}
              {user.name.length > 20 && "..."}
            </H5>
          </Box>
          <P2 color={Colors.text}>
            @{user.username}
          </P2>
        </Box>
      </Touch>
    </Container>
  );
};

export default UsersListItem;