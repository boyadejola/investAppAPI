const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');


const test = async (req, res, next) => {
  // console
  const updataaa = await connectDB.query('select * from testcrud');
  // console.log();
  if (updataaa) {
    let sql = '';
    updataaa.map(a => {
      sql += `update testcrud set city = 'tata' where id = ${a.id}; `;
    })
    console.log(sql);
    const update = await connectDB.query(sql);
    // console.log(update);
  }
  const data = await connectDB.query('select * from testcrud');
  res.status(StatusCodes.OK).json({ data })
}


module.exports = { test }