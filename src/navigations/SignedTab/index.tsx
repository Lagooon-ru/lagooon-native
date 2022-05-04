import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedNavigation from "../Tabs/FeedNavigation";
import Icon from 'components/icon';
import {rs} from 'utils/helper/style/mixins';
import PublishNavigation from "../Tabs/ProfileNavigation";
import Avatar from "components/shared/avatar";
import ProfileNavigation from "../Tabs/PublishNavigation";
import {useStore} from "effector-react";
import {$auth} from "models/auth/state";
import SearchNavigation from 'navigations/Tabs/SearchNavigation';
import ActivityNavigation from "../Tabs/ActivityNavigation";

type RootTabParamList = {
  FeedTab: undefined;
  SearchTab: undefined;
  PublishTab: undefined;
  ActivityTab: undefined;
  ProfileTab: undefined;
};


const SignedTabNavigation: FC = () => {
  const Root: any = createBottomTabNavigator<RootTabParamList>();
  const auth: any = useStore($auth);

  return (
    <Root.Navigator
      initialRouteName='FeedTab'
      screenOptions={{
        tabBarShowLabel: false,
        unmountOnBlur: true,
      }}
    >
      <Root.Screen
        name='FeedTab'
        component={FeedNavigation}
        options={
          ({route}) => ({
            headerShown: false,
            tabBarVisible: true,
            tabBarIcon: ({focused}) => (
              <Icon
                name='home'
                active={focused}
                width={rs(28)}
                height={rs(28)}
              />
            )
          })
        }
      />
      <Root.Screen
        name='SearchTab'
        component={SearchNavigation}
        options={
          ({route}) => ({
            headerShown: false,
            tabBarVisible: true,
            tabBarIcon: ({focused}) => (
              <Icon
                name='search'
                active={focused}
                width={rs(28)}
                height={rs(28)}
              />
            )
          })
        }
      />
      <Root.Screen
        name='PublishTab'
        component={PublishNavigation}
        options={
          ({route}) => ({
            headerShown: false,
            tabBarVisible: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name='video'
                active={focused}
                width={rs(28)}
                height={rs(28)}
              />
            )
          })
        }
      />
      <Root.Screen
        name='ActivityTab'
        component={ActivityNavigation}
        options={
          ({route}) => ({
            headerShown: false,
            tabBarVisible: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name='like'
                active={focused}
                width={rs(32)}
                height={rs(32)}
              />
            )
          })
        }
      />
      <Root.Screen
        name='ProfileTab'
        component={ProfileNavigation}
        options={
          ({route}) => ({
            headerShown: false,
            tabBarVisible: true,
            tabBarIcon: ({focused}) => (
              <Avatar
                bordered
                url={auth.profile.avatar?.path}
                size={rs(28)}
                active={focused}
              />
            )
          })
        }
      />
    </Root.Navigator>
  );
};


export default SignedTabNavigation;