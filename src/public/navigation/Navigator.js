import React, { Component } from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginScreen from '../../screen/Login';
import RegisterScreen from '../../screen/Register';
import ChatListScreen from '../../screen/ChatList';
import MapsScreen from '../../screen/Maps';
import ProfileScreen from '../../screen/Profile';
import LoadingScreen from '../../screen/Loading';

const AuthStack = createStackNavigator(
	{
		Login: {screen: LoginScreen},
		Register: {screen: RegisterScreen}
	}, {
		headerMode: 'none'
	}
);

const BottomNavigation = createMaterialBottomTabNavigator(
	{
		Chat: {screen: ChatListScreen},
		Maps: {screen: MapsScreen},
		Profil: {screen: ProfileScreen}
	}, {
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, horizontal, tintColor}) => {
				const {routeName} = navigation.state;
				if (routeName === 'Chat') {
					return (
						<Image source={require('../../img/chat_icon.png')} style={{height: 20, width: 20}}/>
					);
				}else if (routeName === 'Maps') {
					return (
						<Image source={require('../../img/map_icon.png')} style={{height: 20, width: 20}}/>
					);
				}else if (routeName === 'Profil') {
					return (
						<Image source={require('../../img/user_icon.png')} style={{height: 20, width: 20}}/>
					);
				}
			},
		}),
		initialRouteName: 'Chat',
		activeColor: '#FFFFFF',
		inactiveColor: '#CCCCCC',
		barStyle: {backgroundColor: '#2E79BE'}
	}
);

export default createAppContainer(createSwitchNavigator(
	{
		Loading: LoadingScreen,
		Auth: AuthStack,
		App: BottomNavigation
	}, {
		initialRouteName: 'Loading'
	}
));