import {useFocusEffect} from '@react-navigation/native';
import {useState, useCallback} from 'react';
import {coinI, responseGetI} from '../interfaces/coinsInterfaces';
import {Http} from '../libs/http';

export const useCoins = () => {
  const [coins, setCoins] = useState<coinI[]>([]);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        setLoading(true);
        try {
          const res: responseGetI = await Http.instance.get(
            'https://api.coinlore.net/api/tickers/',
          );
          setCoins(res.data);
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      })();
    }, []),
  );

  return {coins, loading};
};
