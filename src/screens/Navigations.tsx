import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AxiosInterceptor from '../common/AxiosInterceptor';
import KakaoLogin from '../login/KakaoLogin';
import LoginPage from '../login/LoginPage';
import Naming from '../login/Naming';
import Start from '../login/Start';
import MainPage from '../play/MainPage';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
      <Stack.Screen name="Naming" component={Naming} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="AxiosInterceptor" component={AxiosInterceptor} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
