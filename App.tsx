import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/screens/Navigations';
import BottomNavigator from './src/screens/BottomTopNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
