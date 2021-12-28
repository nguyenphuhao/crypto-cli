import { Command, Flags } from "@oclif/core";
import isEmpty from "lodash/isEmpty";
import cli from 'cli-ux'
import calculateBalance from "../../portfolio/calculateBalance";
import getTokenValues from "../../portfolio/getTokenValues";

export default class GetPortfolioCommand extends Command {
  static description = `Let us assume you are a crypto investor. You have made transactions over a period of time which is logged in a CSV file. Write a command line program that does the following
  - Given no parameters, return the latest portfolio value per token in USD
  - Given a token, return the latest portfolio value for that token in USD
  - Given a date, return the portfolio value per token in USD on that date
  - Given a date and a token, return the portfolio value of that token in USD on that date
  `;
  static flags = {
    source: Flags.string({
      char: "s",
      description: "transaction file in csv that stores all transaction",
      default: "./transaction.csv"
    }),
    date: Flags.string({char: 'd', description: "find the token value in USD at a specific date"})
  };

  static args = [
    {name: 'token'}
  ]

  async run() {
    cli.action.start('Processing')
    const { args, flags } = await this.parse(GetPortfolioCommand);

    //Calculate the balance
    const tokens = await calculateBalance(flags.source, args.token, flags.date);
    if (isEmpty(tokens)) {
      this.log("No data found.");
      return;
    }

    //Get values and calculate the value
    const counterSymbols = "USD";
    const values = await getTokenValues(tokens, [counterSymbols]);

    //Pretify the result
    const result = Object.keys(tokens).map((key) => {
      const price = values ? values[key][counterSymbols] : 0;
      return {
        token: key,
        amount: tokens[key],
        [counterSymbols]: tokens[key] * price,
      };
    });
    cli.action.stop();
    cli.table(result, {
      token: {},
      amount: {},
      [counterSymbols]: {}
    });
  }
}
