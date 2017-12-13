import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../utils/CoinIcons';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  image: {
    height: 40,
    width: 40
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff'
  },
  white: {
    color: '#fff'
  }
});

const { container, image, bold, white } = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
  return (
    <View style={container}>
      <Image
        style={image}
        source={{ uri: images[symbol] }}
      />
      <Text style={white}>{symbol}</Text>
      <Text style={white}>{coin_name} <Text style={bold}>$</Text></Text>
      <Text style={white}>{price_usd}</Text>
      <Text style={white}>Change past 24 hours: {percent_change_24h}</Text>
      <Text style={white}>Change past 7 days: {percent_change_7d}</Text>
    </View>
  );
};

export default CoinCard;
