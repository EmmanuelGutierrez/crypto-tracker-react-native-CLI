import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {NavigationTabs} from './src/navigation/Root/NavigationTabs';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};

export default App;
