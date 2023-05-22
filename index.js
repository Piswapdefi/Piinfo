const zt = require('axios'); // Sử dụng thư viện axios
const express = require('express');

const app = express();
const port = 3000;

// Middleware kiểm tra tên miền
const domainAuthMiddleware = (req, res, next) => {
  // Kiểm tra tên miền của yêu cầu
  const requestDomain = req.get('host');

  // Danh sách các tên miền được xác thực
  const allowedDomains = ['piswap.onrender.com', '127.0.0.1:5503', 'www.piswap.io'];

  // Kiểm tra xem tên miền có trong danh sách được xác thực hay không
  if (allowedDomains.includes(requestDomain)) {
    // Cho phép yêu cầu đi tiếp
    next();
  } else {
    // Từ chối yêu cầu
    res.status(403).send('Forbidden');
  }
};

// Sử dụng middleware cho tất cả các yêu cầu
app.use(domainAuthMiddleware);

// API endpoint
app.get('/api/data', async (req, res) => {
  const t = '/api/data';
  const e = {}; // Các tham số yêu cầu
  const r = 'get'; // Phương thức yêu cầu
  const n = req; // Đối tượng yêu cầu

  try {
    const s = {};
    n && n.state && (s = { Authorization: `Bearer ${n.token}` });
    const a = await zt({ method: r, url: hR + t, headers: s, data: e });
    res.json(a.data);
  } catch (error) {
    const u = new Error(error.message);
    (u.info = error.response.data), res.status(500).json(u);
  }
});

// Khởi chạy máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
