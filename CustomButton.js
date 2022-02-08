import React from "react";
import {
    Pressable,
    Text,
    StyleSheet
} from "react-native";
import { useState } from "react";

const CustomButton = (props) => {
    return (
        <Pressable
            style={styles.button}
            android_ripple={{ color: '#ff0' }}
            onPress={props.onPressFunction}
        >
            <Text style={styles.text2}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text2: {
        fontSize: 18,
        fontStyle: 'italic',
        margin: 20,
    },
    button: {
        width: 150,
        alignItems: 'center',
        backgroundColor: '#0ff'
    },
})

export default CustomButton;