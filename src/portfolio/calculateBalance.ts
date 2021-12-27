import { isEmpty } from "lodash";
import { TransactionTypes } from "../constanst";
import readCSV from "../helpers/readCSV";
import { TokenBalanceMap, TransactionType } from "./types";


export default async function calculateBalance(
  path: string,
  tokenParam?: string
): Promise<TokenBalanceMap> {
  try {
    const tokens: TokenBalanceMap = {};
    await readCSV<TransactionType>(path, (data) => {
      const { token, transaction_type, amount } = data;

      if (!isEmpty(tokenParam)) {
        if (tokenParam !== token) {
          return;
        }
      }

      //Check if token has existed,
      if (!tokens[token]) {
        tokens[token] = 0;
      }

      //Calculate token balance
      switch (transaction_type) {
        case TransactionTypes.DEPOSIT:
          tokens[token] += +amount;
          break;
        case TransactionTypes.WITHDRAWAL:
          tokens[token] -= +amount;
          break;
        default:
          break;
      }
    });
    return tokens;
  } catch (error) {
    throw error;
  }
}
