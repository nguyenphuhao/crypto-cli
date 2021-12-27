export interface TransactionType {
  timestamp: number;
  transaction_type: string;
  token: string;
  amount: number;
}

export interface TokenBalanceMap {
  [token: string]: number;
}
