import { TransactionTypes } from "../constanst";
import readCSV from "../helpers/readCSV";
import { TokenBalanceMap, TransactionType } from "./types";


export default async function calculateBalance(
  path: string,
  tokenParam?: string,
  dateParam?: string
): Promise<TokenBalanceMap> {
  try {
    const tokens: TokenBalanceMap = {};
    await readCSV<TransactionType>(path, (data) => {
      const { token, transaction_type, amount, timestamp } = data;
      if (!token) {
        return;
      }
      
      if (dateParam) {
        const dateTime = new Date(new Date(+timestamp*1000).toLocaleDateString());
        const dateTimeParam = new Date(new Date(dateParam).toLocaleDateString());
        if (dateTime > dateTimeParam) {
          return;
        }
      }

      if (tokenParam) {
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
