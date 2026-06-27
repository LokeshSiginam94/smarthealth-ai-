const mongoose = require("mongoose");
const dns = require("dns");

// Force Node.js to use Google DNS instead of 127.0.0.1
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
    try {
        console.log("Node DNS Servers:", dns.getServers());
        console.log("Mongo URI:", process.env.MONGODB_URI);

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ MongoDB Connected");
        console.log(conn.connection.host);
    } catch (err) {
        console.error("FULL ERROR:");
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;