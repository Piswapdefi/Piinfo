const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Gọi API từ trang web "https://piswap.onrender.com/api/data"
    const response = await axios.get('https://piswap.onrender.com/api/data');
    const data = response.data;

    // Xử lý dữ liệu từ API và trả về kết quả cho client
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
