const express = require("express");
const mongoose = require("mongoose");
const { connection } = require("./controllers/connection");
const { route } = require("./Routes/token.route");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", route);
const PORT = process.env.port;

app.listen(PORT, async () => {
    console.log(PORT)
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
  console.log("connected to db");
});
