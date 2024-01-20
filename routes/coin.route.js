const express = require("express");
const getCoin = require("../controller/coin.controller");
const coinRouter = express.Router();

coinRouter.get("/", getCoin);


module.exports = coinRouter;
