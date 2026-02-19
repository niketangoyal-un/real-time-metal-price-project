// utils/cronJob.js
const cron =require('node-cron');
const redisClient=require( '../redisClient.js');
const fs=require('fs/promises')
// Cron schedule example: every hour
cron.schedule('*/30 * * * * *', async () => {
  try {
    console.log('Running cron job: Fetch metals prices');

    // const response = await fetch('https://api.metals.dev/v1/latest?api_key=4QHN8HHFMWXPB5XRCXS4452XRCXS4&currency=INR&unit=kg');
    // const data = await response.json();
    // console.log(data)
    // // Save in Redis
    // await redisClient.setEx('metals_prices', 30, JSON.stringify((data)));

    const data=await fs.readFile('price2.json', 'utf-8');;
    await redisClient.setEx('metals_prices', 30, (data));
    console.log('Metals prices updated in Redis');
  } catch (error) {
    console.error('Cron job error:', error);
  }
});
