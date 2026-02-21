// utils/cronJob.js
const cron =require('node-cron');
const redisClient=require( '../redisClient.js');
const fs=require('fs/promises')
const socket = require("./socket.js");
const io=socket.getIO()
cron.schedule('*/30 * * * * *', async () => {
  try {
    console.log('Running cron job: Fetch metals prices');
    const response = await fetch(`https://api.metals.dev/v1/latest?api_key=${process.env.API_KEY}`);
    const data = await response.json();
    // Save in Redis
    await redisClient.setEx('metals_prices', 30, JSON.stringify((data)));
    io.emit('price_update',JSON.stringify(data));

    // const data=await fs.readFile('price2.json', 'utf-8');;
    // await redisClient.setEx('metals_prices', 30, (data));
    console.log('Metals prices updated in Redis');
  } catch (error) {
    console.error('Cron job error:', error);
  }
});
