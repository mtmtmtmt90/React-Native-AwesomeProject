import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Button
} from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          Home screen
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('About', {
          })}
        >
          <Text style={styles.text}>
            About App
          </Text>
        </Pressable>
      </View>
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
    header_view : {
      flexDirection:'row',
      alignItems:'center'
    }
  });
  