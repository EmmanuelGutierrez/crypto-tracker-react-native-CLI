import {useState, useEffect} from 'react';
import {marketI} from '../interfaces/coinsInterfaces';
import {Http} from '../libs/http';

export const useMarkets = (coinId: string) => {
  const [markets, setMarkets] = useState<marketI[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res: marketI[] = await Http.instance.get(
          `https://api.coinlore.net/api/coin/markets/?id=${coinId}`,
        );
        setMarkets(res);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    })();
  }, [coinId]);

  return {markets, loading};
};
