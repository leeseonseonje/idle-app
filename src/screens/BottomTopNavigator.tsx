import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginPage from '../login/LoginPage';
import Naming from '../login/Naming';
import MainPage from '../play/MainPage';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          title: '홈',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Naming}
        options={{
          title: '알림',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={LoginPage}
        options={{
          title: '검색',
        }}
      />
      <Tab.Screen
        name="Message"
        component={MainPage}
        options={{
          title: '메시지',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
