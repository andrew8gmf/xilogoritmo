import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import ObrasChoice from './pages/ObrasChoice';
import Obras from './pages/Obras';
import ObrasInfo from './pages/ObrasInfo';
import Metadata from './pages/Metadata';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Landing" component={Landing}/>
        <AppStack.Screen name="ObrasChoice" component={ObrasChoice}/>
        <AppStack.Screen name="Obras" component={Obras}/>
        <AppStack.Screen name="ObrasInfo" component={ObrasInfo}/>
        <AppStack.Screen name="Metadata" component={Metadata}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;