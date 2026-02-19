const express = require('express')
const redisClient = require("./redisClient");
const route  = require('./routes/price.route');
const app = express()
const port = 3000
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
//price routes
app.use('/api/v1',route)



module.exports=app;
