import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

type props = {name: string};

const CustomButton = (props: props) => {
  return (
    <TouchableHighlight style={styles.buttonContaniner}>
      <Text style={styles.buttonText}> {props.name} </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  buttonContaniner: {
    width: '100%',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#75BAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  }
});

export default CustomButton;