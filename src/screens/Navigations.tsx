import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import KakaoLogin from '../login/KakaoLogin';
import LoginPage from '../login/LoginPage';
import Naming from '../login/Naming';
import Start from '../login/Start';
import MainPage from '../play/MainPage';
import BottomNavigator from './BottomTopNavigator';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KakaoLogin"
        component={KakaoLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Naming"
        component={Naming}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
