const mysql = require("mysql2/promise");
const fs = require("fs");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  ssl: {
    ca: fs.readFileSync("/home/suvadip/ssl/DigiCertGlobalRootCA.crt.pem"),
    rejectUnauthorized: true
  }
});

module.exports = db;
