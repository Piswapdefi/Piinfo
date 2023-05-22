const axios = require('axios');

async function requestDataFromAPI() {
  try {
    const response = await axios.get('https://piswap.onrender.com:443/api/endpoint');
    console.log(response.data);
    // Xử lý dữ liệu tại đây
  } catch (error) {
    console.error(error);
  }
}

requestDataFromAPI();
