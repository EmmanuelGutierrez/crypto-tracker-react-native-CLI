import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {marketI} from '../../interfaces/coinsInterfaces';
import {colors} from '../../res/colors';

interface CoinMarketItemPropsI {
  market: marketI;
}

export const CoinMarketItem = ({market}: CoinMarketItemPropsI) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{market.name}</Text>
      <Text style={styles.priceText}>{market.price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: colors.zircon,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  nameText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priceText: {
    color: '#fff',
  },
});
