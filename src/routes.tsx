import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import ObrasChoice from './pages/ObrasChoice';

import Obras from './pages/Obras';
import ObrasInfo from './pages/ObrasInfo';
import ObrasMetadata from './pages/ObrasMetadata';

import ObrasCreated from './pages/ObrasCreated';
import ObrasCreatedInfo from './pages/ObrasCreatedInfo';
import ObrasCreatedMetadata from './pages/ObrasCreatedMetadata';

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
        <AppStack.Screen name="ObrasMetadata" component={ObrasMetadata}/>

        <AppStack.Screen name="ObrasCreated" component={ObrasCreated}/>
        <AppStack.Screen name="ObrasCreatedInfo" component={ObrasCreatedInfo}/>
        <AppStack.Screen name="ObrasCreatedMetadata" component={ObrasCreatedMetadata}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;