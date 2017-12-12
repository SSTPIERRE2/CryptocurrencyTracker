/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { Header, CryptoContainer } from './src/components';

import Store from './src/Store';

const CommonStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1, backgroundColor: '#212822' }}>
          <CommonStatusBar backgroundColor="#005005" barStyle="light-content" />
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
