import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/screens/Navigations';
import Money from './src/play/Money';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <Money />
  );
};

export default App;
