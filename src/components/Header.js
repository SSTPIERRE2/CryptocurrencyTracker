import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hello World!</Text>
    </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2e7d32'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#fff'
  }
});

export { Header };
