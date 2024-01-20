const CoinModel = require("../model/coin.model");

const getCoin = async (req, res) => {
    try {
      let { page } = req.query;
      page = page || 1;
      if(page > 10 ){
        page = 1;
      }
      const limit = 6;
      const skip_Page = (page - 1) * limit;
  
      const coin = await CoinModel.find().skip(skip_Page).limit(limit);
      res.status(200).send({ msg: "all Coins", coin });
    } catch (error) {
      res.status(404).send({ msg: error.message });
    }
  }

  module.exports = getCoin