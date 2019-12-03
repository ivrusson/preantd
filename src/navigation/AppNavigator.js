import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auth: AuthStack
  }, {
    initialRouteName: 'Auth'
  })
);
