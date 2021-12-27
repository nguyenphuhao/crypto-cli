import { Command, Flags } from "@oclif/core";
import isEmpty from "lodash/isEmpty";
import calculateBalance from "../../portfolio/calculateBalance";
import getTokenValues from "../../portfolio/getTokenValues";
import { TokenBalanceMap } from "../../portfolio/types";

export default class GetPortfolioCommand extends Command {
  static description = "return the latest portfolio value per token in USD";
  static flags = {
    source: Flags.string({ char: "s" }),
    token: Flags.string({ char: "t" }),
  };

  async run() {
    const { flags } = await this.parse(GetPortfolioCommand);

    const sourceFile = flags.source || "./transaction.csv";

    //Calculate the balance
    const tokens = await calculateBalance(sourceFile, flags.token);
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
    console.table(result);
  }
}
