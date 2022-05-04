import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useStore} from "effector-react";
import Box from "components/shared/paper/Box";
import Avatar from "components/shared/avatar";
import {P4} from "components/shared/paragraph";
import Touch from "components/shared/paper/Touch";

import {px, rs, wp} from 'utils/helper/style/mixins';
import Colors from "utils/helper/style/color";
import {$auth} from "models/auth/state";
import {$users} from "models/users/state";

const AvatarFlow = () => {
  const auth: any = useStore($auth);
  const users: any[] = useStore($users).users;
  const navigation: any = useNavigation()
  const [follows, setFollows] = useState<any[]>([]);

  useEffect(() =>
  {
    const followers = []

    users.map((u) => {
      if (u.follow.filter(f => f.id === auth.profile.id).length > 0)
      {
        followers.push(u)
      }
    })

    setFollows(followers)
  }, [users, auth])

  return (
    <Box
      height={px(100)}
      width={wp(100)}
    >
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={styles.wrap}
        >
          <Touch
            justify='center'
            mh={px(8)}
            onPress={() => {

            }}
          >
            <Box
              style={styles.avatar}
              mb={px(4)}
            >
              <Avatar
                url={auth.profile.avatar?.path}
                size={px(60)}
              />
            </Box>
            <P4
              textAlign='center'
            >
              Вы
            </P4>
          </Touch>
          {
            follows.map((follow) => (
              <Touch
                mh={8}
                justify='center'
                align='center'
                onPress={() => {
                  navigation
                    .navigate('StoryScreen', {uid: follow.id})
                }}
                key={follow.id}
              >
                <Box
                  style={styles.avatar}
                  mb={px(4)}
                >
                  <Avatar
                    url={follow.avatar?.path}
                    size={px(60)}
                  />
                </Box>
                <P4 textAlign='center'>
                  @{follow.username.substring(0, 10)}
                  {follow.username.length > 10 && "..."}
                </P4>
              </Touch>
            ))
          }
        </View>
      </ScrollView>
    </Box>
  );
};


const styles = StyleSheet.create({

  wrap: {
    flexDirection: 'row',
    paddingBottom: px(12)
  },

  avatar: {
    width: 64,
    height: 64,
    borderWidth: rs(2),
    borderColor: Colors.orange,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 80,
  },

})

export default AvatarFlow;