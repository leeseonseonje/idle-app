import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import MainPage from '../play/MainPage';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="상점"
        component={MainPage}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 50, height: 50}}
                source={require('../resource/images/bottom/store.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="홈"
        component={MainPage}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 50, height: 50}}
                source={require('../resource/images/bottom/home.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="가방"
        component={MainPage}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 50, height: 50}}
                source={require('../resource/images/bottom/bag.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="합성"
        component={MainPage}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 50, height: 50}}
                source={require('../resource/images/bottom/synthesis.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
