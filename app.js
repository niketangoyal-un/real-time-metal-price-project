const express = require('express')
const redisClient = require("./redisClient");
const route  = require('./routes/price.route');
const app = express()
require('dotenv').config()
const port = 4000
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
//price routes
app.get('/',(req,res)=>{
    res.send("hlo")
})
app.get('/getname',(req,res)=>{
    res.status(200).json({message:"hlo how are you"})
})
app.use('/api/v1',route)



module.exports=app;
