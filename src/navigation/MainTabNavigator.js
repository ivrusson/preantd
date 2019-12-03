import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TodoScreen from '../screens/TodoScreen';
import AboutScreen from '../screens/AboutScreen';
import AccountScreen from '../screens/AccountScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Todo: TodoScreen,
  About: AboutScreen,
  Account: AccountScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'home'} />
  ),
};

const TodoStack = createStackNavigator({
  Todo: TodoScreen,
});
TodoStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'add-to-list'} />
  ),
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
});
AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'info'} />
  ),
};

const AccountStack = createStackNavigator({
  AnimationBangumiList: AccountScreen,
});
AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'sound-mix'} />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TodoStack,
  AboutStack,
  AccountStack,
});
