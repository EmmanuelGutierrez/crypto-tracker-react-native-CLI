import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {coinI} from '../../interfaces/coinsInterfaces';
import {RootStackScreenProps, RootTabsParamList} from '../Root/types';

export type FavoritesStacksParamList = {
  FavoritesScreen: undefined;
  FavoriteCoinsDetail: {
    coin: coinI;
  };
};

export type FavoritesStacksSreenProps<
  T extends keyof FavoritesStacksParamList,
> = StackScreenProps<FavoritesStacksParamList, T>;

export type FavoritesScreenNavigationProp<
  T extends keyof FavoritesStacksParamList,
> = CompositeScreenProps<
  StackScreenProps<FavoritesStacksParamList, T>,
  RootStackScreenProps<keyof RootTabsParamList>
>;
