const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://piswap.onrender.com/');
    const data = response.data;
    // Xử lý dữ liệu tại đây
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
