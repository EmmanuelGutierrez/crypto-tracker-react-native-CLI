import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {CoinsStacksParamList} from '../Coins/types';
import {FavoritesStacksParamList} from '../Favorites/types';

export type RootTabsParamList = {
  Coins: NavigatorScreenParams<CoinsStacksParamList>;
  Favorites: NavigatorScreenParams<FavoritesStacksParamList>;
};

export type RootStackScreenProps<T extends keyof RootTabsParamList> =
  StackScreenProps<RootTabsParamList, T>;

declare global {
  namespace ReactNavigation {
    interface CommonPropsI<T extends keyof RootTabsParamList> {
      navigation: BottomTabNavigationProp<RootTabsParamList, T>;
      route: RouteProp<RootTabsParamList, T>;
    }
  }
}
