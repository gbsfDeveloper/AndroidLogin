import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const DefaultButton = (props) => {
  const text = props.text;
  const buttonOnPress = props.onPress;
  let url = props.url;
  let data = props.data;
  const bgColor = props.bgColor;
  const btnPersonalizeColors = {
    backgroundColor: ((bgColor === undefined || bgColor =='') ? '#4298f4' : bgColor)
  };
  const [buttonText] = useState(text);
  return (
    <View style={DefaultButtonStyles.container}>
      <TouchableOpacity
        style={[DefaultButtonStyles.button, btnPersonalizeColors]}
        onPress={() =>{buttonOnPress(url, data)}}>
        <Text style={DefaultButtonStyles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const DefaultButtonStyles = StyleSheet.create({
  container: {
    width: '60%',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: 'white',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default DefaultButton;
