import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DefaultTitle = (params) => {
  const text = params.text;
  return (
    <View style={DefaultTitleStyles.container}>
      <Text style={DefaultTitleStyles.text}>{text}</Text>
    </View>
  );
};

const DefaultTitleStyles = StyleSheet.create({
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
    fontSize: 26,
    fontWeight:'bold',
  },
});

export default DefaultTitle;
