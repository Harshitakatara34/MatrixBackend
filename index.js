const express  = require('express');
const cors = require('cors');
const serverConnection = require('./db');
const coinRouter = require('./routes/coin.route');
require('dotenv').config()
const app = express();

app.use(express.json()); 
app.use(cors())

app.get("/", (req, res) => {
    try {
        res.status(200).send({message : "welcome to home page!"});
    } catch (error) {
        res.status(400).send({message :error.message});    
    }
})

app.use("/coin", coinRouter);


const PORT = process.env.port || 8080

app.listen(PORT, async (req, res) => {
    try {
        await serverConnection
        console.log(`Server is listning on ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})



