const mariadb = require('mariadb');

const connectDB = mariadb.createPool({
  port: 3306,//process.env.DB_PORT,
  host: 'localhost',//process.env.DB_HOST,
  user: 'root',//process.env.DB_USER,
  password: '123456',//process.env.DB_PASS,
  database: 'veninvest_db',//process.env.DB_NAME,
  connectionLimit: 5,
  multipleStatements: true
});

// Connect and check for errors
connectDB.getConnection((err, connection) => {
  console('yahooooo from connect DB');
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