const axios = require('axios');

const url = 'https://piswap.onrender.com/';

async function fetchData() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
