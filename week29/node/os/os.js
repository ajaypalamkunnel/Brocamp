const os = require("os");

function getOsdetails() {
  console.log("Platform:", os.platform());
  console.log("Architecture:", os.arch());
  console.log("CPU Cores:", os.cpus().length);
  console.log("Total Memory:", Math.round(os.totalmem() / 1024 / 1024), "MB");
  console.log("Free Memory:", Math.round(os.freemem() / 1024 / 1024), "MB");
  console.log("Uptime (in min):", Math.round(os.uptime() / 60));
  console.log("Host Name:", os.hostname());
  console.log("User Info:", os.userInfo().username);
}


module.exports = getOsdetails