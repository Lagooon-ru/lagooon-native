import React, {FC, useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import SignedTabNavigation from "../SignedTab";
import FeedScreen from "screens/Feed";
import UserScreen from "screens/User";
import {StoryPostScreen, NewStoryScreen} from "screens/StoryPost";
import StoryScreen from "screens/Story";

import {useAllUsersMutation} from "api/graphql";
import {initUsersEvent} from "models/users/event";
import ChatScreen from 'screens/Chat/ChatScreen';

type RootStackParamList =
  {
    Signed: undefined;
    StoryPostScreen: undefined;
    NewStoryScreen: undefined;
    FeedScreen: undefined;
    UserScreen: undefined;
    StoryScreen: undefined;
    ChatScreen: undefined;
  };

const SignedNavigation: FC = () => {
  const Stack: any = createStackNavigator<RootStackParamList>();
  const [allUsersMutation] = useAllUsersMutation();

  useEffect(() =>
  {
    allUsersMutation()
      .then((res) =>
      {
        initUsersEvent(
          res.data.allUsers
            .map((user) => ({...user, online: false})))
      })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signed'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Signed'
          component={SignedTabNavigation}
        />

        <Stack.Screen
          name='StoryPostScreen'
          component={StoryPostScreen}
        />

        <Stack.Screen
          name='NewStoryScreen'
          component={NewStoryScreen}
        />

        <Stack.Screen
          name='FeedScreen'
          component={FeedScreen}
        />

        <Stack.Screen
          name='UserScreen'
          component={UserScreen}
        />

        <Stack.Screen
          name='StoryScreen'
          component={StoryScreen}
        />

        <Stack.Screen
          name='ChatScreen'
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedNavigation;