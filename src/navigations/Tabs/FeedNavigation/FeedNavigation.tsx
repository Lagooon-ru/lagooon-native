import React, {FC} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from 'screens/Feed';
import FeedsScreen from 'screens/Feeds';

type RootTabParamList = {
  FeedsScreen: undefined;
  FeedScreen: undefined;
  // ChatsNavigation: undefined;
  // ProfileScreen: undefined;
  // PostScreen: undefined;
};

const Stack: any = createStackNavigator<RootTabParamList>();
const FeedNavigation: FC = () => {
  return (
    <Stack.Navigator initialRouteName="FeedsScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='FeedsScreen' component={FeedsScreen} />

      {/*<Stack.Screen name='ChatsScreen' component={ChatsNavigation} />*/}
      {/*<Stack.Screen name='ProfileScreen' component={ProfileScreen} />*/}
      {/*<Stack.Screen name='PostScreen' component={PostScreen} />*/}
    </Stack.Navigator>
  );
};

export default FeedNavigation;