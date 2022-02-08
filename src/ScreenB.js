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

export default function AboutScreen() {
    // const { id, string } = route.params
    function LogoTitle() {
        return (
          <View style={styles.header_view}>
            <Image
            style={{ width: 50, height: 50 }}
            source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/OOjs_UI_icon_info.svg/2048px-OOjs_UI_icon_info.svg.png'} }
          />
          <Text style={styles.text}>
            About the app
          </Text>
          </View>
        )
      }
      
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          About
        </Text>
        <Text>
          Session id : 
        </Text>
        <Text>
          App name : 
        </Text>
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
    