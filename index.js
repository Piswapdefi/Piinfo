const axios = require('axios');

async function triggerDeploy() {
  const deployHookURL = 'https://api.render.com/deploy/srv-chl50067avj2179k2kbg?key=0QR7G7oywtg'; // Thay thế bằng Deploy Hook URL của bạn

  try {
    const response = await axios.post(deployHookURL);
    console.log('Triggered deploy successfully');
  } catch (error) {
    console.error('Failed to trigger deploy:', error.message);
  }
}

// Gọi hàm triggerDeploy để kích hoạt yêu cầu POST
triggerDeploy();
