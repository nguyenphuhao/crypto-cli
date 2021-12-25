import { Command } from "@oclif/core";
import list from '../../portfolio/list';
import csvToArray from "../../helpers/csvToArray";

type TransactionType = {
    timestamp: number;
    transaction_type: string;
    token: string;
    amount: number;
}

export default class GetPortfolioCommand extends Command {
  async run(): Promise<any> {
      const data =  await csvToArray<TransactionType>('./transaction.csv');
      const result = await list(data);
      console.table(result);
  }
}
