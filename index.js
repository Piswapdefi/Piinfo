const axios = require('axios');

const BASE_URL = 'https://piswap.onrender.com/';

async function fetchData(endpoint, data = {}, method = 'get', token) {
  try {
    let headers = {};
    if (token && token.state) {
      headers = { Authorization: `Bearer ${token.token}` };
    }

    const response = await axios({
      method: method,
      url: BASE_URL + endpoint,
      headers: headers,
      data: data,
    });

    return response.data;
  } catch (error) {
    const customError = new Error(error.message);
    customError.info = error.response.data;
    throw customError;
  }
}

// Example usage
async function main() {
  try {
    // Fetch data using GET method
    const getData = await fetchData('dep-chlgkv3hp8uej755fp60', {}, 'get');
    console.log('GET data:', getData);

    // Fetch data using POST method
    const postData = await fetchData('api/endpoint', { key: 'value' }, 'post');
    console.log('POST data:', postData);
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Error info:', error.info);
  }
}

main();
