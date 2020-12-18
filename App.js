/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import LoginContainer from './src/components/loginContainer';

const App = () => {
  const click = () => {
    console.log('Click en mi componente boton');
  };
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <ScrollView>
            <LoginContainer></LoginContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
