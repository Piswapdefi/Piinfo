async function triggerDeploy() {
  const deployHookURL = 'https://api.render.com/deploy/srv-chl50067avj2179k2kbg?key=0QR7G7oywtg'; // Thay thế bằng Deploy Hook URL của bạn

  try {
    const response = await fetch(deployHookURL, { method: 'POST' });
    if (response.ok) {
      console.log('Triggered deploy successfully');
    } else {
      throw new Error('Failed to trigger deploy');
    }
  } catch (error) {
    console.error('Failed to trigger deploy:', error.message);
  }
}

// Gọi hàm triggerDeploy để kích hoạt yêu cầu POST
triggerDeploy();
