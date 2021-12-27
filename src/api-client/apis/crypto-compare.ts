import HttpClient from '../http/http-client';

const BASE_URL = "https://min-api.cryptocompare.com/data";
const httpClient = HttpClient.getInstance(BASE_URL);

export type MultipleSymbolsPrice = {
  [key: string]: {
    [key:string]: number
  };
};
export type MultipleSymbolsPriceParams = {
  fsyms: string,
  tsyms: string
}
export async function getMultipleSymbolsPrice(params: MultipleSymbolsPriceParams): Promise<MultipleSymbolsPrice> {
  return httpClient.get('/pricemulti', {
    params
  })
}
