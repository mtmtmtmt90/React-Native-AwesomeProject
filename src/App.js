/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Button,
} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#ff00ff'
          },
          headerTintColor: '#000077',
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'autoprefixer'
              size = focused ? 25 : 20
              color = focused ? '#ff00ff' : '#555'
            } else {
              iconName = 'btc'
              size = focused ? 25 : 20
              color = focused ? '#ff00ff' : '#555'
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
      >
        <Tab.Screen
          name='Home'
          options={{
            title: 'Home page',
          }}

          component={ScreenA}
        />
        <Tab.Screen
          name='About'
          options={{ headerTitle: (props) => <LogoTitle {...props} /> },
            { headerBackTitle: 'Home' }
          }
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    margin: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00ffff',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,

  },
  header_view: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default App;
