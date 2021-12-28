crypto-cli
=================

<!-- toc -->

<!-- tocstop -->

# Introduction

<!-- introduction -->

A command line interface (CLI) program that helps to view the portfolio from the transaction log in CSV. Here are some features:

- Given no parameters, return the latest portfolio value per token in USD
- Given a token, return the latest portfolio value for that token in USD
- Given a date, return the portfolio value per token in USD on that date
- Given a date and a token, return the portfolio value of that token in USD on that date

The CSV file has the following columns

- timestamp: Integer number of seconds since the Epoch
- transaction_type: Either a DEPOSIT or a WITHDRAWAL
- token: The token symbol
- amount: The amount transacted

Note: The api to fetch prices data is from Crypto Compare API (https://min-api.cryptocompare.com/)

<!-- introductionstop -->

# Installation
<!-- installation -->

To install the `crypto-cli`, please do following

```bash
$ cd crypto-cli
$ yarn install
$ npm install -g .
```
To run the unit test

```bash
$ yarn test
```

<!-- installationstop -->

# Usage

<!-- usage -->

```bash
USAGE
  $ crypto-cli portfolio [TOKEN] [-s <value>] [-d <value>]

FLAGS
  -d, --date=<value>    find the token value in USD at a specific date
  -s, --source=<value>  [default: ./transaction.csv] transaction file in csv that stores all transaction
```

To show help

```bash
$ crypto-cli portfolio --help
```

<!-- usagestop -->

# Examples

<!-- example -->

### Given no parameters, return the latest portfolio value per token in USD

```bash
$ crypto-cli portfolio
$ crypto-cli portfolio --source=/Users/phuhao.nguyen/Downloads/transactions.csv
```

***Note:*** the `transaction.csv` file is used at current directory as logged file by default. If your logged file is located in another place, just use `--source` or `-s` option.

*The output:* 

```bash
Token Amount             Usd
 ───── ────────────────── ──────────────────
 BTC   1200425.1521679235 58982997890.034615
 ETH   901704.2831248266  3522579918.3697853
 XRP   903332.9813728357  802069.3541609409
```

### Given a token, return the latest portfolio value for that token in USD

```bash
$ crypto-cli portfolio BTC
$ crypto-cli portfolio BTC --source=/Users/phuhao.nguyen/Downloads/transactions.csv
```

*The output:*

```bash
 Token Amount             Usd
 ───── ────────────────── ─────────────────
 BTC   1200425.1521679235 59036776936.85174
```

### Given a date, return the portfolio value per token in USD on that date

```bash
$ crypto-cli portfolio --date=2019-10-20
$ crypto-cli portfolio --date=2019-10-20 --source=/Users/phuhao.nguyen/Downloads/transactions.csv
```

*The output:*

```bash
 Token Amount             Usd
 ───── ────────────────── ─────────────────
 BTC   1200168.3902399263 59040507708.63561
 XRP   903087.7927348375  802032.2687278092
 ETH   901516.6678798293  3526967599.079541
```

### Given a date and a token, return the portfolio value of that token in USD on that date

```bash
$ crypto-cli portfolio ETH --date=2019-12-25
$ crypto-cli portfolio ETH --date=2019-12-25 --source=/Users/phuhao.nguyen/Downloads/transactions.csv
```

*The output:*

```bash
 Token Amount            Usd
 ───── ───────────────── ──────────────────
 ETH   901704.2831248266 3531651063.4580207
```

<!-- examplestop -->

# How it works

This command line interface (CLI) program is built on top of `oclif` framework. Here is the simple structure of the project



![image-20211228150555192](https://live.staticflickr.com/65535/51780893142_aa0e63fd85_z.jpg)

There're 3 main components: Commands, Services and API Client. 

- The API Client helps to send request/receive response from Multiple API Provider (Crypto Compare, Binance, Coinmarketcap).
- The Services contains all logic of the commands. The commands can invoke any services in need. 
- The Commands helps to collect the arguments, options, and do a minor logic for a specific command. 

Here are the main folders in the projects

`api-client`: Follow the facet pattern to send request and receive response from the API Providers (crypto compare, binance, coinmarketcap...). 

`commands`: All commands are developed here, to process the arguments, the options from the terminal.

`portfolio`: A portfolio service folder, all the logic for the `crypto-cli portfolio` commands are developed here. In case we have more commands like `crypto-cli deposit`, a new service folder called `deposit` will be created. 

`helpes`: To develop some common utilities for the projects. 

`constants`: all constants variables are defined here.

