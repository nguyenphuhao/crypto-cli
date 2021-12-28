import { expect, test } from "@oclif/test";

const pricesResponse = {
  BTC: {
    USD: 49037.04,
  },
  ETH: {
    USD: 3907.26,
  },
  XRP: {
    USD: 0.8798,
  },
};
describe("portfolio", () => {
  test
    .nock("https://min-api.cryptocompare.com/data", (api) =>
      api
        .get("/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD")
        .reply(200, pricesResponse)
    )
    .stdout()
    .command(["portfolio"])
    .it(
      "Given no parameters, return the latest portfolio value per token in USD",
      (ctx) => {
        const expected =
          " Token Amount   Usd          \n ───── ──────── ──────────── \n BTC   0.5      24518.52     \n ETH   1.2      4688.712     \n XRP   0.693272 0.6099407056 \n";
        expect(ctx.stdout).to.equals(expected);
      }
    );

  test
    .nock("https://min-api.cryptocompare.com/data", (api) =>
      api
        .get("/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD")
        .reply(200, pricesResponse)
    )
    .stdout()
    .command([
      "portfolio",
      "--source=./test/commands/portfolio/transaction-test.csv",
    ])
    .it(
      "Given no parameters, return the latest portfolio value per token in USD - (options --source)",
      (ctx) => {
        const expected =
          " Token Amount   Usd          \n ───── ──────── ──────────── \n BTC   0.5      24518.52     \n ETH   1.2      4688.712     \n XRP   0.693272 0.6099407056 \n";
        expect(ctx.stdout).to.equals(expected);
      }
    );

  test
    .nock("https://min-api.cryptocompare.com/data", (api) =>
      api.get("/pricemulti?fsyms=BTC&tsyms=USD").reply(200, pricesResponse)
    )
    .stdout()
    .command([
      "portfolio",
      "--source=./test/commands/portfolio/transaction-test.csv",
      "BTC",
    ])
    .it(
      "Given a token, return the latest portfolio value for that token in USD - (options --source)",
      (ctx) => {
        const expected =
          " Token Amount Usd      \n ───── ────── ──────── \n BTC   0.5    24518.52 \n";
        expect(ctx.stdout).to.equals(expected);
      }
    );

  test
    .nock("https://min-api.cryptocompare.com/data", (api) =>
      api.get("/pricemulti?fsyms=BTC,ETH&tsyms=USD").reply(200, pricesResponse)
    )
    .stdout()
    .command([
      "portfolio",
      "--source=./test/commands/portfolio/transaction-test.csv",
      "--date=2021-12-25",
    ])
    .it(
      "Given a date (2021-12-25), return the portfolio value per token in USD on that date - (options --source)",
      (ctx) => {
        const expected =
          " Token Amount Usd     \n ───── ────── ─────── \n BTC   0      0       \n ETH   2      7814.52 \n";
        expect(ctx.stdout).to.equals(expected);
      }
    );

  test
    .nock("https://min-api.cryptocompare.com/data", (api) =>
      api.get("/pricemulti?fsyms=ETH,XRP&tsyms=USD").reply(200, pricesResponse)
    )
    .stdout()
    .command([
      "portfolio",
      "--source=./test/commands/portfolio/transaction-test.csv",
      "--date=2021-12-27",
    ])
    .it(
      "Given a date (2021-12-27), return the portfolio value per token in USD on that date - (options --source)",
      (ctx) => {
        const expected =
          " Token Amount   Usd                 \n ───── ──────── ─────────────────── \n ETH   -0.8     -3125.8080000000004 \n XRP   0.693272 0.6099407056        \n";
        expect(ctx.stdout).to.equals(expected);
      }
    );

  test
    .nock("https://min-api.cryptocompare.com/data", (api) =>
      api.get("/pricemulti?fsyms=ETH&tsyms=USD").reply(200, pricesResponse)
    )
    .stdout()
    .command([
      "portfolio",
      "--source=./test/commands/portfolio/transaction-test.csv",
      "--date=2021-12-27",
      "ETH",
    ])
    .it(
      "Given a date (2021-12-27) and a token (ETH), return the portfolio value of that token in USD on that date - (options --source)",
      (ctx) => {
        const expected =
          " Token Amount Usd                 \n ───── ────── ─────────────────── \n ETH   -0.8   -3125.8080000000004 \n";
        expect(ctx.stdout).to.equals(expected);
      }
    );
});
