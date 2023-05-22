const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('postgres://piswap:0O1WlVc97wJNPWcwva08W3vvapLrtCzV@dpg-chl4blm4dadfmsh0ujk0-a/piswap');
    const data = response.data;
    // Xử lý dữ liệu tại đây
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

app.listen(443, () => {
  console.log('Server is running on port 443');
});
