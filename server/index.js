const express = require("express")
require("dotenv").config()
const cors = require('cors')
const { connection } = require("./DataBase.js")
const app = express();
app.use(express.json());





const PORT = process.env.PORT
app.listen(PORT, async () => {
    try {
        console.log(`http://localhost:${PORT}`)
        await connection;
        console.log("connected to MongoDb")
    } catch (error) {
        console.log("<------------------Error in connection DB error---------------->", error)
    }
})

