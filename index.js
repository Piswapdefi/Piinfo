const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Tạo proxy server để truy cập API Render từ máy khách
app.use(
  '/',
  createProxyMiddleware({
    target: 'https://piswap.onrender.com',
    changeOrigin: true,
  })
);

// Truy cập API Render từ máy chủ
app.get('/api', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/deploy/srv-chl50067avj2179k2kbg?key=0QR7G7oywtg');
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
