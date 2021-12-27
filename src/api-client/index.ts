
import * as cryptoCompareAPI from "./apis/crypto-compare";
import * as coinmarketcapAPI from "./apis/coinmarketcap";
import { Delimeters } from "../constanst";

export async function todo(): Promise<string> {
  return coinmarketcapAPI.todo();
}

export type GetTokenPrice = cryptoCompareAPI.MultipleSymbolsPrice;
export async function getTokenPrices(baseSymbols: string[], counterSymbols: string[]): Promise<GetTokenPrice> {
  try {
    return cryptoCompareAPI.getMultipleSymbolsPrice({
      fsyms: baseSymbols.join(Delimeters.COMMA),
      tsyms: counterSymbols.join(Delimeters.COMMA)
    });
  } catch (error) {
    throw error;
  }
}
