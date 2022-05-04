import React, {FC} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoriesScreen from 'screens/Stories';

type RootTabParamList = {
  StoriesScreen: undefined;
};

const Stack: any = createStackNavigator<RootTabParamList>();

const PublishNavigation: FC = () => {
  return (
    <Stack.Navigator initialRouteName='StoriesScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StoriesScreen' component={StoriesScreen} />
    </Stack.Navigator>
  );
};

export default PublishNavigation;