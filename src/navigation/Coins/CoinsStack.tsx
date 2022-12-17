import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CoinsScreen} from '../../screens/Coins/CoinsScreen';
import {CoinsDetail} from '../../screens/CoinsDetail/CoinsDetail';
import {colors} from '../../res/colors';
import {CoinsStacksParamList} from './types';

const Stacks = createStackNavigator<CoinsStacksParamList>();

export const CoinsStack = () => {
  return (
    <Stacks.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}>
      <Stacks.Screen component={CoinsScreen} name="CointsScreen" />
      <Stacks.Screen component={CoinsDetail} name="CoinsDetail" />
    </Stacks.Navigator>
  );
};
