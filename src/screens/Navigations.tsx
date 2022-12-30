import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import KakaoLogin from '../login/LoginEvent';
import LoginPage from '../login/LoginPage';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
