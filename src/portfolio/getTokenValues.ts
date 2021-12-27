import { TokenBalanceMap } from "./types";
import isEmpty from "lodash/isEmpty";
import { getTokenPrices } from "../api-client";

export default async function getTokenValues(baseTokens: TokenBalanceMap, counterTokens: string[]) {
  try {
    if (isEmpty(baseTokens)) {
      return;
    }
    const symbols = Object.keys(baseTokens);
    const values = await getTokenPrices(symbols, counterTokens);
    return values;
  } catch (error) {
    throw error;
  }
}
