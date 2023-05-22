const express = require('express');
const app = express();

const allowedDomains = ['http://127.0.0.1:5503/', 'www.piswap.io'];

// Middleware kiểm tra tên miền được phép
function checkAllowedDomain(req, res, next) {
  const origin = req.headers.origin;
  if (allowedDomains.includes(origin)) {
    // Cho phép yêu cầu từ tên miền được xác thực
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Không cho phép yêu cầu từ tên miền khác
    return res.status(403).send('Forbidden');
  }
  next();
}

// Sử dụng middleware cho tất cả các yêu cầu
app.use(checkAllowedDomain);

// Định nghĩa endpoint "/api/data"
app.get('/api/data', (req, res) => {
  // Xử lý yêu cầu GET đến "/api/data"
  // ...
  res.send('Data response');
});

// Định nghĩa trang chủ
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

// Khởi động máy chủ
app.listen(3000, () => {
  console.log('Server is running on port 443');
});
