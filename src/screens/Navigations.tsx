import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import KakaoLogin from '../login/KakaoLogin';
import LoginPage from '../login/LoginPage';
import Naming from '../login/Naming';
import MainPage from '../play/MainPage';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
      <Stack.Screen name="Naming" component={Naming} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
