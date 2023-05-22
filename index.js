const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api/render',
  createProxyMiddleware({
    target: 'https://api.render.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api/render': '/deploy/srv-chl50067avj2179k2kbg?key=0QR7G7oywtg',
    },
  })
);

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://piswap.onrender.com',
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
