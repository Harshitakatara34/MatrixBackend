const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
  img: { type: String },
  tokenName : { type: String },
  symbol : { type: String },
  decimals : { type: Number },
  marketcap : { type: Number },
  chain : { type: String},
});


const CoinModel = mongoose.model("Coin", coinSchema);

module.exports = CoinModel;

