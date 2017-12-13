import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { FetchCoinData } from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    console.log(`got new props boi`);
    console.log(crypto);

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'...Loading'}
            textStyle={{ color: '#fff' }}
            animation='fade'
          />
        </View>
      );
    }

    return crypto.data.map((coin, index) =>
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderCoinCards()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(`state change: ${JSON.stringify(state)}`);
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
