import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const DefaultInput = (params) => {
  const labelText = params.labelText;
  const placeHolder = params.placeHolder;
  const [busqueda, setBusqueda] = useState('');
  return (
    <View style={DefaultInputStyles.container}>
      <Text style={DefaultInputStyles.text}>{labelText}</Text>
      <TextInput
        style={DefaultInputStyles.inputStyle}
        onChangeText={() => alert('1')}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const DefaultInputStyles = StyleSheet.create({
  container: {
    width: '80%',
    paddingTop:10,
    paddingBottom:10,
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#2c68a7',
    backgroundColor: '#d4f7ff',
    fontSize: 12,
    borderWidth: 0,
  },
  text: {
    color: '#4298f4',
    paddingBottom:5,
  },
});

export default DefaultInput;
