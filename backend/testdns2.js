const dns = require("dns");

console.log("Servers:", dns.getServers());

dns.resolveSrv(
  "_mongodb._tcp.smarthealthai.zglkvxb.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);