import React, {FC} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "screens/Profile";
import SettingScreen from 'screens/Setting';

type RootTabParamList = {
  ProfileScreen: undefined;
  SettingScreen: undefined;
};

const Stack: any = createStackNavigator<RootTabParamList>();

const ProfileNavigation: FC = () => {
  return (
    <Stack.Navigator initialRouteName='ProfileScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='SettingScreen' component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;