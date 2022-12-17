import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {FavoritesEmptyState} from '../../components/Favorites/FavoritesEmptyState';
import {colors} from '../../res/colors';
import {useFavorites} from '../../hooks/useFavorites';
import {CoinItem} from '../../components/Coins/CoinItem';

export const FavoritesScreen = () => {
  const {favorites, loading} = useFavorites();
  console.log(favorites);
  return (
    <View style={style.container}>
      {!loading && favorites.length < 0 ? (
        <FavoritesEmptyState />
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => <CoinItem key={item.id} coin={item} />}
        />
      )}
      {loading && <ActivityIndicator />}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
});
