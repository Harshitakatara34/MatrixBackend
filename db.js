const mongoose = require('mongoose');
require('dotenv').config()

const serverConnection = mongoose.connect(process.env.mongoUrl)

module.exports = serverConnection

