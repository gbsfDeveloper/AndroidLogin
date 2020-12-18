import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DefaultMessage = (params) => {
  const text = params.text;
  return (
    <View style={DefaultMessageStyles.container}>
      <Text style={DefaultMessageStyles.text}>{text}</Text>
    </View>
  );
};

const DefaultMessageStyles = StyleSheet.create({
  container: {
    width: '80%',
    paddingTop:10,
    paddingBottom:10,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#4298f4',
    textAlign:'center',
  },
});

export default DefaultMessage;
