const redisClient = require("../redisClient");
const fs=require('fs/promises');

exports.getPrices=async (req, res) => {
  try {
    
  //  const value = await redisClient.get('metals_prices');
  //   if (!value) return res.status(404).json({ success: false, message: 'No data yet' });

  //   const data = JSON.parse(value);
      const response = await fetch(`https://api.metals.dev/v1/latest?api_key=${process.env.API_KEY}`);
    const data = await response.json();
    console.log(data)
    // Save in Redis
    await redisClient.setEx('metals_prices', 30, JSON.stringify((data)));
    // console.l/og(data)
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching prices' });
  }
};
