import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CoinsStack} from '../Coins/CoinsStack';
import {RootTabsParamList} from './types';
import {Image} from 'react-native';
import {colors} from '../../res/colors';
import {FavoritesStack} from '../Favorites/FavoritesStack';

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export const NavigationTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.blackPearl,
        },
      }}>
      <Tabs.Screen
        name="Coins"
        component={CoinsStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/bank.png')}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/star.png')}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
