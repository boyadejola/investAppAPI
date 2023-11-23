const env = require("dotenv");
const mariadb = require('mariadb');

env.config()

const connectDB = mariadb.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5,
  multipleStatements: true
});

// Connect and check for errors
connectDB.getConnection( async (err, connection) => {
  console('yahooooo from connect DB');
const result = await connectDB.query("SELECT * FROM veninvest_db")
console.log(result)
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection lost');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connection');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }
  if (connection) connection.release();

  return;
});

module.exports = connectDB;