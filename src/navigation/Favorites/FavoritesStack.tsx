import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../../res/colors';
import {FavoritesStacksParamList} from './types';
import {FavoritesScreen} from '../../screens/Favorites/FavoritesScreen';
import {CoinsDetail} from '../../screens/CoinsDetail/CoinsDetail';

const Stacks = createStackNavigator<FavoritesStacksParamList>();

export const FavoritesStack = () => {
  return (
    <Stacks.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}>
      <Stacks.Screen component={FavoritesScreen} name="FavoritesScreen" />
      <Stacks.Screen component={CoinsDetail} name="FavoriteCoinsDetail" />
    </Stacks.Navigator>
  );
};
