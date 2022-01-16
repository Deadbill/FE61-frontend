import axios from 'axios';

const getBitcoinData = async (currency) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=${currency}&days=1&interval=hourly`);

  return response.data;
};

export default getBitcoinData;
