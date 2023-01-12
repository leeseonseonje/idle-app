import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import MainPage from '../play/MainPage';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 40, height: 40}}
                source={require('../resource/images/newlogo.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Search" component={MainPage} />
      <Tab.Screen name="Notification" component={MainPage} />
      <Tab.Screen name="Message" component={MainPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
