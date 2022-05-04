import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {
  BioScreen,
  EmailScreen,
  ForgetScreen,
  LoginScreen,
  NameScreen,
  PasswordScreen,
  PhotoScreen,
  ResetScreen,
  UsernameScreen
} from 'screens/Auth';

type RootStackParamList = {
  EmailScreen: undefined;
  PasswordScreen: undefined;
  UsernameScreen: undefined;
  NameScreen: undefined;
  PhotoScreen: undefined;
  BioScreen: undefined;
  LoginScreen: undefined;
  ForgetScreen: undefined;
  ResetScreen: undefined;
  // ImportScreen: undefined;
  // ImportDataScreen: undefined;
  // SuccessScreen: undefined;
};

const UnSignedNavigation: FC = () => {
  const Stack: any = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='EmailScreen'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='EmailScreen' component={EmailScreen}/>
        <Stack.Screen name='PasswordScreen' component={PasswordScreen}/>
        <Stack.Screen name='UsernameScreen' component={UsernameScreen}/>
        <Stack.Screen name='NameScreen' component={NameScreen}/>
        <Stack.Screen name='PhotoScreen' component={PhotoScreen}/>
        <Stack.Screen name='BioScreen' component={BioScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='ForgetScreen' component={ForgetScreen}/>
        <Stack.Screen name='ResetScreen' component={ResetScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UnSignedNavigation;