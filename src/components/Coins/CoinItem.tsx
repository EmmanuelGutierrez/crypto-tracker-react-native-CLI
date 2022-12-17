import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {coinI} from '../../interfaces/coinsInterfaces';
import {colors} from '../../res/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  CoinsStacksParamList,
  CoinsStacksSreenProps,
} from '../../navigation/Coins/types';
import {
  FavoritesStacksParamList,
  FavoritesStacksSreenProps,
} from '../../navigation/Favorites/types';

interface CoinItemPropsI {
  coin: coinI;
}

export const CoinItem = ({coin}: CoinItemPropsI) => {
  const route = useRoute<
    | CoinsStacksSreenProps<'CointsScreen'>['route']
    | FavoritesStacksSreenProps<'FavoritesScreen'>['route']
  >();

  const navigation = useNavigation<
    | CoinsStacksSreenProps<'CointsScreen'>['navigation']
    | FavoritesStacksSreenProps<'FavoritesScreen'>['navigation']
  >();

  const getArrow = () => {
    if (parseFloat(coin.percent_change_1h) > 0) {
      return require('../../assets/arrow.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  const handlePress = () => {
    if (route.name === 'CointsScreen') {
      (
        navigation as StackNavigationProp<
          CoinsStacksParamList,
          'CointsScreen',
          undefined
        >
      ).navigate('CoinsDetail', {coin});
    } else {
      (
        navigation as StackNavigationProp<
          FavoritesStacksParamList,
          'FavoritesScreen',
          undefined
        >
      ).navigate('FavoriteCoinsDetail', {coin});
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{coin.symbol}</Text>
        <Text style={styles.nameText}>{coin.name}</Text>
        <Text style={styles.priceText}>{coin.price_usd}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{coin.percent_change_1h}</Text>
        <Image source={getArrow()} style={styles.imgIcon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderColor: colors.zircon,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 12,
  },
  percentText: {
    fontSize: 12,
    color: '#fff',
    marginRight: 8,
  },
  priceText: {
    fontSize: 14,
    color: '#fff',
  },
  imgIcon: {
    width: 22,
    height: 22,
  },
});
