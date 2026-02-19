const redisClient = require("../redisClient");
const fs=require('fs/promises');

exports.getPrices=async (req, res) => {
  try {
    const value = await redisClient.get('metals_prices');
    if (!value) return res.status(404).json({ success: false, message: 'No data yet' });

    const data = JSON.parse(value);
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching prices' });
  }
};
