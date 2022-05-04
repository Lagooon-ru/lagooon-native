import React, {FC} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityScreen from "screens/Activity";

type RootTabParamList = {
  ActivityScreen: undefined;

};

const Stack: any = createStackNavigator<RootTabParamList>();
const ActivityNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ActivityScreen' component={ActivityScreen} />
    </Stack.Navigator>
  );
};

export default ActivityNavigation;