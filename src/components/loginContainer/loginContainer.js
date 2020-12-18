import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DefaultButton from '../button';
import DefaultInput from '../input';
import DefaultMessage from '../message';
import DefaultTitle from '../title';

const LoginContainer = (params) => {
  const request = (url, obj) => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
    }).then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        throw 'Error al realizar la consulta';
      }
    });
  };

  const text = params.text;
  return (
    <View style={DefaultLoginContainerStyles.container}>
      <DefaultTitle text={'Log in'} />
      <DefaultMessage text={'You can login with your actual account'} />
      <DefaultInput labelText={'Usuario'} />
      <DefaultInput labelText={'Password'} />
      <DefaultButton text={'Log in'} onPress={request} data={{url:"localhost:4000/login", obj:{user:"ben",password:"110893"}}}/>
    </View>
  );
};

const DefaultLoginContainerStyles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 3,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    color: '#4298f4',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default LoginContainer;
