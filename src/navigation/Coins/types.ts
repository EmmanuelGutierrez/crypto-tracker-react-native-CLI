import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {coinI} from '../../interfaces/coinsInterfaces';
import {RootStackScreenProps, RootTabsParamList} from '../Root/types';

export type CoinsStacksParamList = {
  CointsScreen: undefined;
  CoinsDetail: {
    coin: coinI;
  };
};

export type CoinsStacksSreenProps<T extends keyof CoinsStacksParamList> =
  StackScreenProps<CoinsStacksParamList, T>;

export type CoinsScreenNavigationProp<T extends keyof CoinsStacksParamList> =
  CompositeScreenProps<
    StackScreenProps<CoinsStacksParamList, T>,
    RootStackScreenProps<keyof RootTabsParamList>
  >;
