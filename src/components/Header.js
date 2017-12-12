import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Crypto Tracker</Text>
    </View>
);

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  headerContainer: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2e7d32'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: Platform.OS === 'Android' ? 'Roboto' : 'System',
    color: '#fff'
  }
});

export { Header };
