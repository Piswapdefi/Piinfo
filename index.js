const axios = require('axios');

const zt = axios.create({
  baseURL: 'https://piswap.onrender.com/',
});

zt.defaults.headers.common['Authorization'] = '';

async function pR(t, e = {}, r = 'get', n) {
  return new Promise(async (resolve, reject) => {
    let headers = {};
    if (n && n.state) {
      headers['Authorization'] = `Bearer ${n.token}`;
    }

    try {
      const response = await zt({
        method: r,
        url: t,
        headers: headers,
        data: e,
      });
      resolve(response.data);
    } catch (error) {
      const customError = new Error(error.message);
      customError.info = error.response.data;
      reject(customError);
    }
  });
}

// Sử dụng hàm pR
(async () => {
  try {
    const result = await pR('https://api.render.com/deploy/srv-chl50067avj2179k2kbg?key=0QR7G7oywtg', { key: 'value' }, 'post', { state: true, token: 'your_token' });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
