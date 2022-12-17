import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  SectionListData,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {CoinsScreenNavigationProp} from '../../navigation/Coins/types';
import {getIconByName} from '../../libs/getSymbolIcon';
import {colors} from '../../res/colors';
import {coinI} from '../../interfaces/coinsInterfaces';
import {useMarkets} from '../../hooks/useMarkets';
import {CoinMarketItem} from '../../components/Coins/CoinMarketItem';
import {Storage} from '../../libs/storage';
import {FavoritesScreenNavigationProp} from '../../navigation/Favorites/types';

interface FavoriteCoinsDetailPropsI
  extends FavoritesScreenNavigationProp<'FavoriteCoinsDetail'> {}

interface CoinsDetailPropsI extends CoinsScreenNavigationProp<'CoinsDetail'> {}

export const CoinsDetail = ({
  navigation,
  route: {
    params: {coin},
  },
}: CoinsDetailPropsI | FavoriteCoinsDetailPropsI) => {
  const {markets} = useMarkets(coin.id);
  const [favorite, setFavorite] = useState(false);

  const addFavorite = useCallback(
    async (key: string) => {
      const stringCoin = JSON.stringify(coin);
      const stored = await Storage.instanse.store(key, stringCoin);
      if (stored) {
        setFavorite(true);
      }
    },
    [coin],
  );

  const removeFavorite = useCallback((key: string) => {
    Alert.alert('Remove favorite', 'Are you shure?', [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: async () => {
          const stored = await Storage.instanse.remove(key);
          if (stored) {
            setFavorite(false);
          }
        },
      },
    ]);
  }, []);

  const getSections = (coinData: coinI) => {
    const sections: SectionListData<
      string | number,
      {
        title: string;
        data: number[] | string[];
      }
    >[] = [
      {
        title: 'Rank',
        data: [coinData.rank],
      },
      {
        title: 'Market cap',
        data: [coinData.market_cap_usd],
      },
      {
        title: 'Price USD',
        data: [coinData.price_usd],
      },
    ];
    return sections;
  };

  useEffect(() => {
    const getFavorites = async () => {
      const key = `favorite-${coin.id}`;
      try {
        const favStr = await Storage.instanse.get(key);
        favStr && setFavorite(true);
      } catch (error) {
        console.log(error);
      }
    };
    const toggleFavorite = () => {
      const key = `favorite-${coin.id}`;
      if (favorite) {
        (() => removeFavorite(key))();
      } else {
        (async () => await addFavorite(key))();
      }
    };
    (async () => await getFavorites())();
    navigation.setOptions({
      title: coin.name,
      headerRight: () => (
        <View style={styles.headerRight}>
          <Pressable onPress={toggleFavorite}>
            <Image
              style={styles.iconFaveImg}
              source={
                favorite
                  ? require('../../assets/star-yellow.png')
                  : require('../../assets/star.png')
              }
            />
          </Pressable>
        </View>
      ),
      headerStyle: {
        shadowColor: colors.white,
        backgroundColor: colors.blackPearl,
      },
    });
  }, [navigation, coin, favorite, removeFavorite, addFavorite]);
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={styles.titleText}>{coin.symbol}</Text>
        <Image
          style={styles.iconImg}
          source={{uri: getIconByName(coin.name)}}
        />
      </View>
      <View style={styles.sectionContainer}>
        <SectionList
          sections={getSections(coin)}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.marketTitle}>Market</Text>
      <FlatList
        style={styles.list}
        data={markets}
        horizontal
        keyExtractor={item => `${item.name}-${item.base}-${item.quote}`}
        renderItem={({item}) => <CoinMarketItem market={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: colors.charade,
    flex: 1,
    paddingTop: 24,
  },
  subHeader: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    marginBottom: 12,
    marginHorizontal: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  iconImg: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  iconFaveImg: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
  },
  sectionContainer: {
    marginHorizontal: 30,
    maxHeight: 280,
    shadowColor: colors.white,
    shadowRadius: 2,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  list: {
    maxHeight: 60,
    marginHorizontal: 8,
  },
});
