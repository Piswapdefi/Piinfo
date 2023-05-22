const axios = require('axios');

axios.get('https://api.render.com/deploy/srv-chl50067avj2179k2kbg?key=0QR7G7oywtg')
  .then(response => {
    const data = response.data;
    // Xử lý dữ liệu tại đây
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
