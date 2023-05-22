const axios = require('axios');

async function requestDataFromAPI() {
  try {
    const apiKey = 'rnd_J7JWn7Td7clVfbmg3nnxrCMMaGs0';
    const headers = {
      Authorization: `Bearer ${apiKey}`
    };

    const response = await axios.get('https://piswap.onrender.com/api/endpoint', { headers });
    console.log(response.data);
    // Xử lý dữ liệu tại đây
  } catch (error) {
    console.error(error);
  }
}

requestDataFromAPI();
