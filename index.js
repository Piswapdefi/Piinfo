const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://piswap.onrender.com',
    changeOrigin: true,
  })
);

app.listen(443, () => {
  console.log('Proxy server is running on port 443');
});
