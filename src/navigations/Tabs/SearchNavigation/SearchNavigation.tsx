import React, {FC} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from 'screens/Search';

type RootTabParamList = {
  SearchScreen: undefined;
};

const Stack: any = createStackNavigator<RootTabParamList>();
const SearchNavigation: FC = () => {
  return (
    <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchNavigation;