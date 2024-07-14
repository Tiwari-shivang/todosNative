import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native'

type props = {
    name: string,
}

const TextButton = (props: props) => {
  return (
    <Pressable style={styles.textBtnContainer}>
        <Text style={styles.btnText}> {props.name} </Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    textBtnContainer: {
        width: '100%',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#75BAFF',
    }
})

export default TextButton