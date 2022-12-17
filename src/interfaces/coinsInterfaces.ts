export interface coinI {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  csupply: string;
  tsupply: string;
  market_cap_usd: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  volume24: number;
  volume24a: number;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
}

export interface infoI {
  coins_num: number;
  time: number;
}

export interface responseGetI {
  data: coinI[];
  info: infoI;
}

export interface marketI {
  name: string;
  base: string;
  quote: string;
  price: number;
  price_usd: number;
  volume: number;
  volume_use: number;
  time: number;
}
