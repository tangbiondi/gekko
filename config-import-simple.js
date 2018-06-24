// Everything is explained here:
// @link https://gekko.wizb.it/docs/commandline/plugins.html

var config = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.debug = true; // for additional logging / debugging

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                         WATCHING A MARKET
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.watch = {

  // see https://gekko.wizb.it/docs/introduction/supported_exchanges.html
  exchange: 'binance',
  currency: 'BTC',
  asset: 'BNB',

  // You can set your own tickrate (refresh rate).
  // If you don't set it, the defaults are 2 sec for
  // okcoin and 20 sec for all other exchanges.
  // tickrate: 20
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING TRADING ADVICE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.tradingAdvisor = {
  enabled: true,
  method: 'MACD',
  candleSize: 60,
  historySize: 10,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING PLUGINS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.performanceAnalyzer = {
  enabled: true,
  riskFreeReturn: 5
}

config.adviceLogger = {
  enabled: false,
  muteSoft: true // disable advice printout if it's soft
}

config.telegrambot = {
  enabled: false,
  token: 'YOUR_TELEGRAM_BOT_TOKEN',
};

config.candleWriter = {
  enabled: true
}

config.adviceWriter = {
  enabled: false,
  muteSoft: true,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING ADAPTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.adapter = 'postgresql';

config.sqlite = {
  path: 'plugins/sqlite',

  dataDirectory: 'history',
  version: 0.1,

  journalMode: require('./web/isWindows.js') ? 'DELETE' : 'WAL',

  dependencies: []
}

  // Postgres adapter example config (please note: requires postgres >= 9.5):
config.postgresql = {
  path: 'plugins/postgresql',
  version: 0.1,
  connectionString: 'postgres://soqsdloojpmgqg:12c9837fed213a64e07103c515a2a57d6bfce59de2e538e9e9a0ffce8e537dea@ec2-107-21-255-2.compute-1.amazonaws.com:5432/d91bbjvd9k9lg3', // if default port
  database: null, // if set, we'll put all tables into a single database.
  schema: 'public',
  dependencies: [{
    module: 'pg',
    version: '6.1.0'
  }]
}

// Mongodb adapter, requires mongodb >= 3.3 (no version earlier tested)
config.mongodb = {
  path: 'plugins/mongodb',
  version: 0.1,
  connectionString: 'mongodb://localhost/gekko', // connection to mongodb server
  dependencies: [{
    module: 'mongojs',
    version: '2.4.0'
  }]
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING BACKTESTING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Note that these settings are only used in backtesting mode, see here:
// @link: https://gekko.wizb.it/docs/commandline/backtesting.html

config.backtest = {
  daterange: 'scan',
// daterange: {
//   from: "2018-03-01",
//   to: "2018-04-28"
//},
  batchSize: 50
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING IMPORTING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.importer = {
  daterange: {
    // NOTE: these dates are in UTC
    from: "2018-06-23 00:00:00",
    to: "2018-06-24 07:45:00"
  }
}

// set this to true if you understand that Gekko will
// invest according to how you configured the indicators.
// None of the advice in the output is Gekko telling you
// to take a certain position. Instead it is the result
// of running the indicators you configured automatically.
//
// In other words: Gekko automates your trading strategies,
// it doesn't advice on itself, only set to true if you truly
// understand this.
//
// Not sure? Read this first: https://github.com/askmike/gekko/issues/201
config['I understand that Gekko only automates MY OWN trading strategies'] = false;

module.exports = config;
