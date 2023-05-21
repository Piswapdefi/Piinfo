const express = require('express');

const app = express();
const port = 3000;

// Định nghĩa các route cho ứng dụng
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Khởi động máy chủ và lắng nghe các kết nối đến cổng đã chỉ định
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
