// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';  // AuthNavigator for authentication screens

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />  {/* AppNavigator imports and uses AuthNavigator which houses the login screen and register screen */}
    </NavigationContainer>
  );
};

export default AppNavigator;

