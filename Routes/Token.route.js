const express = require("express");
const { TokenModel } = require("../Models/Token.model");
const route = express.Router();

route.post("/token", async (req, res) => {
  const { img, tokenName, symbol, decimals, marketcap, chain } = req.body;

  try {
    const token = new TokenModel({ img, tokenName, symbol, decimals, marketcap, chain });
    await token.save();
    res.send("Token Added");
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});


route.get("/token", async (req, res) => {
  try {
    const tokens = await TokenModel.find();
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});


route.delete("/token/:id", async (req, res) => {
  const tokenId = req.params.id;

  try {
    const deletedToken = await TokenModel.findByIdAndDelete(tokenId);
    if (deletedToken) {
      res.json({ message: "Token deleted successfully", deletedToken });
    } else {
      res.status(404).json({ error: "Token not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});


route.put("/token/:id", async (req, res) => {
  const tokenId = req.params.id;
  const { img, tokenName, symbol, decimals, marketcap, chain } = req.body;

  try {
    const updatedToken = await TokenModel.findByIdAndUpdate(
      tokenId,
      { img, tokenName, symbol, decimals, marketcap, chain },
      { new: true } 
    );

    if (updatedToken) {
      res.json({ message: "Token updated successfully", updatedToken });
    } else {
      res.status(404).json({ error: "Token not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});

module.exports = {
  route,
};
