const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema({
  img: { type: String, required: true },
  tokenName: { type: String, required: true },
  symbol: { type: String, required: true },
  decimals:{ type: Number, required: true },
  marketcap: { type: Number, required: true },
  chain: { type: String, required: true },
});

const TokenModel = mongoose.model("token", TokenSchema);

module.exports = {
  TokenModel,
};
