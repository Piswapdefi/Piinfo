const zt = require('axios');

const hR = "https://piswap.onrender.com/";

async function pR(t, e = {}, r = "get", n) {
  // Các dòng mã của hàm pR...
}

async function main() {
  try {
    const response = await pR("endpoint", { data: "example" });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

main();
