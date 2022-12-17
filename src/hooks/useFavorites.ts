import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {coinI} from '../interfaces/coinsInterfaces';
import {Storage} from '../libs/storage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<coinI[]>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setLoading(true);
        try {
          const allKeys = await Storage.instanse.getAllKeys();
          if (allKeys) {
            const keys = allKeys.filter(key => key.includes('favorite-'));
            const favs = await Storage.instanse.multiGet(keys);
            const favoritesParse = favs?.map(
              fav => fav[1] && JSON.parse(fav[1]),
            );
            favoritesParse && setFavorites(favoritesParse);
          }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      })();
    }, []),
  );

  return {favorites, loading};
};
