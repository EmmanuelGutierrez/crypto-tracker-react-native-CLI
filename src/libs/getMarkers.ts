import {marketI} from '../interfaces/coinsInterfaces';
import {Http} from './http';

export const getMarkets = async (coinId: string) => {
  const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;

  const markets: marketI[] = await Http.instance.get(url);

  return markets;
};
