import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useCoins} from '../../hooks/useCoins';
import {FlatList} from 'react-native-gesture-handler';
import {CoinItem} from '../../components/Coins/CoinItem';
import {colors} from '../../res/colors';
import {CoinsSearch} from '../../components/Coins/CoinsSearch';
import {coinI} from '../../interfaces/coinsInterfaces';

export const CoinsScreen = () => {
  const {coins, loading} = useCoins();
  const [filteredCoins, setFilteredCoins] = useState<coinI[]>([]);

  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);

  const handleSearch = (query: string) => {
    const coinsFiltered = coins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredCoins(coinsFiltered);
  };

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} />
      {!loading ? (
        <FlatList
          data={filteredCoins}
          renderItem={({item}) => <CoinItem coin={item} key={item.id} />}
        />
      ) : (
        <ActivityIndicator size={'large'} color="#feff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
});
