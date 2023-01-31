const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const bcrypt = require("bcryptjs");
const { randomString } = require('../middleware/authentication');
const { constants } = require('../model/constants');
const data = require('../model/roles.json');

const createleague = async (req, res) => {
  if (req.user.role != data.manager) {
    return res.status(200).json("Not Authorized")
  }
  const { customId, leagueName } = req.body

  const customIdexist = await connectDB.query("select * from leagues where customId = ?", [customId]);
  //  res.send(result);
  if (customIdexist.length > 0) {
    return res.send('Id already exist')
  }
  try {
    var league = await connectDB.query("insert into leagues (customId,leagueName,isActive) values (?,?,?)", [customId, leagueName, true]);
    console.log(league ? league.insertId : '------nI HUa-------')
    const id = league ? league.insertId : '------nI HUa-------';
    res.status(StatusCodes.CREATED).json({ res: parseInt(id) > 0 ? true : false });
    // const result = await connectDB.query("select * from tasks where email = ?", [body.email]);
    // res.status(StatusCodes.OK).json({result});

  } catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_createleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getleague = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const { pageno, count } = req.query;
    const numPerPage = Number(count) || 10;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    const league = await connectDB.query(`select l.leagueid, l.leaguename, l.customid, u.userfirstname, u.userlastname from leagues l left join users u on u.userid = l.createdby where l.isActive = true order by 1 desc limit ${limit}`);
    if (league && league.length > 0) {
      constants.apiResponse.data = league;
      constants.apiResponse.code = StatusCodes.OK;
      constants.apiResponse.totalCount = league.length;
    }
    return res.status(StatusCodes.OK).json(constants.apiResponse);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getMyLeagues = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { pageno, count } = req.query;
    const numPerPage = Number(count) || 100;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if (role > 0 && userid > 0) {
      const isManagement = role == data.user ? false : true;
      let dbData = [];
      if (isManagement) {
        let query = '';
        if (role == data.super_admin) {
          query = `select l.leagueid, l.leaguename, l.customid, u.userfirstname, u.userlastname from leagues l left join users u on u.userid = l.createdby where l.isActive = true order by 1 desc limit ${limit}`
        }
        else if (role == data.admin) {
          query = `select l.leagueid, l.leaguename, l.customid, u.userfirstname, u.userlastname from leagues l left join users u on u.userid = l.createdby where l.isActive = true and l.createdby in (select userid from users where roleid in (${data.admin},${data.manager},${data.user})) order by 1 desc limit ${limit}`
        }
        else if (role == data.manager) {
          query = `select l.leagueid, l.leaguename, l.customid, u.userfirstname, u.userlastname from leagues l left join users u on u.userid = l.createdby where l.isActive = true and l.createdby = ${userid} order by 1 desc limit ${limit}`
        }
        dbData = await connectDB.query(query);
      } else {
        dbData = await connectDB.query(`select l.leagueid, l.leaguename, l.customid, u.userfirstname, u.userlastname, l.createdby from leagues l left join userleagues ul on ul.leagueid = l.leagueid left join users u on u.userid = ul.userid where l.isActive = true and ul.userid = ${userid} order by 1 desc limit ${limit}`);
      }
      if (dbData && dbData.length > 0) {
        const unique = [...new Set(dbData.map(x => x.leagueid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = unique.map(a => {
          return {
            leagueid: a,
            leaguename: dbData.filter(xx => xx.leagueid == a)[0].leaguename,
            customid: dbData.filter(xx => xx.leagueid == a)[0].customid,
            manager: `${dbData.filter(xx => xx.leagueid == a)[0].userfirstname} ${dbData.filter(xx => xx.leagueid == a)[0].userlastname}`,
            createdby: dbData.filter(xx => xx.leagueid == a)[0].createdby,
          }
        });
        constants.apiResponse.totalCount = constants.apiResponse.data.length;
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getMyLeagues';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getLeaguePlayers = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { id: leagueId } = req.params;
    const { pageno, count } = req.query;
    const numPerPage = Number(count) || 10;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if ((role == data.super_admin || role == data.admin || role == data.manager) && leagueId > 0) {
      const dbData = await connectDB.query(`select l.leagueid, l.leaguename, u.userid, u.userfirstname, u.userlastname, u.roleid, u.email, ul.createdon as leaguejoineddate from users u inner join userleagues ul on ul.userid = u.userid inner join leagues l on l.leagueid = ul.leagueid where l.leagueid = ${leagueId} and ul.isactive = true order by 1 desc limit ${limit}`);
      if (dbData && dbData.length > 0) {
        const unique = [...new Set(dbData.map(x => x.userid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = unique.map(a => {
          return {
            userid: a,
            leagueid: dbData.filter(xx => xx.userid == a)[0].leagueid,
            leagueName: dbData.filter(xx => xx.userid == a)[0].leaguename,
            playerName: `${dbData.filter(xx => xx.userid == a)[0].userfirstname} ${dbData.filter(xx => xx.userid == a)[0].userlastname}`,
            roleID: dbData.filter(xx => xx.userid == a)[0].roleid,
            email: dbData.filter(xx => xx.userid == a)[0].email,
            leagueJoinedDate: dbData.filter(xx => xx.userid == a)[0].leaguejoineddate,
            // statusID: dbData.filter(xx => xx.userid == a)[0].statusid,
          }
        });
        constants.apiResponse.totalCount = constants.apiResponse.data.length;
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getLeaguePlayers';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const joinleague = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { leagueid, password } = req.body;
    if (role > 0 && leagueid > 0 && userid > 0 && password) {
      const query = `select * from userleagues ul where userid = ${userid} and leagueid = ${leagueid} and isactive = true`
      const joinedLeague = await connectDB.query(query);
      if (joinedLeague && joinedLeague.length > 0) {
        constants.apiResponse.code = StatusCodes.NON_AUTHORITATIVE_INFORMATION;
        constants.apiResponse.error = 'You have already joined this team';
        constants.apiResponse.msg = 'You have already joined this team';
        constants.apiResponse.data = 'You have already joined this team';
        return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.apiResponse);
      }
      const leagueQuery = `select * from leagues where leagueid = ${leagueid} and isactive = true`;
      const league = await connectDB.query(leagueQuery);
      const isMatch = league && league.length > 0 ? await bcrypt.compare(password, league[0].password) : false;
      if (!isMatch) {
        constants.apiResponse.code = StatusCodes.FORBIDDEN;
        constants.apiResponse.data = 'Incorrect Password';
        constants.apiResponse.error = 'Incorrect Password';
        constants.apiResponse.msg = 'Incorrect Password';
        return res.status(StatusCodes.FORBIDDEN).json(constants.apiResponse)
      }
      const insertQuery = `INSERT INTO userleagues (userid, statusid, leagueid, isactive, createdby, createdon) VALUES (${userid}, true, ${leagueid}, true, ${userid}, now())`;
      const rews = await connectDB.query(insertQuery);
      constants.apiResponse.code = StatusCodes.OK;
      constants.apiResponse.data = 'League has been joined';
      constants.apiResponse.msg = 'League has been joined';
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    } else return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_joinleague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const createEditLeague = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { leagueid, leagueName, password } = req.body;
    if (role > 0 && role != data.user && userid > 0) {
      if (leagueName) {
        if (leagueid) {
          const exist = `select * from leagues where leagueid = ${leagueid} and isactive = true`;
          const checkDB = await connectDB.query(exist);
          if (checkDB && checkDB.length > 0) {
            let isAllow = true;
            if (role == data.manager) {
              if (checkDB[0].createdby != userid) {
                isAllow = false;
              }
            }
            if (isAllow) {
              let query = `UPDATE leagues SET leaguename = '${leagueName}',`;
              if (password) {
                const hashPassword = await bcrypt.hash(password, 8);
                query += ` password = '${hashPassword}',`;
              }
              query += ` updatedon = now(), updatedby = ${userid} WHERE (leagueid = ${leagueid})`;
              const ress = await connectDB.query(query);
              constants.apiResponse.code = StatusCodes.OK;
              constants.apiResponse.data = 'League has been updated';
              constants.apiResponse.msg = 'League has been updated';
              return res.status(StatusCodes.OK).json(constants.apiResponse);
            } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
          } else res.status(StatusCodes.BAD_REQUEST).json(constants.infoRequired);
        }
        else {
          if (!password) return res.status(StatusCodes.BAD_REQUEST).json(constants.infoRequired);
          const hashedPassword = await bcrypt.hash(password, 8);
          const customID = randomString();
          const insertQuery = `INSERT INTO leagues (leaguename, customid, password, isactive, createdon, createdby) VALUES ('${leagueName}', '${customID}', '${hashedPassword}', true, now(), ${userid})`;
          const resw = await connectDB.query(insertQuery);
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.data = 'League has been created';
          constants.apiResponse.msg = 'League has been created';
          return res.status(StatusCodes.OK).json(constants.apiResponse);
        }
      } else return res.status(StatusCodes.BAD_REQUEST).json(constants.infoRequired);
    } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_createEditLeague';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getAllTeams = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const exist = `select * from teams where isactive = true`;
    const checkDB = await connectDB.query(exist);
    if (checkDB && checkDB.length > 0) {
      constants.apiResponse.code = StatusCodes.OK;
      constants.apiResponse.data = checkDB;
    }
    return res.status(StatusCodes.OK).json(constants.apiResponse);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getAllTeams';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getMyJoinedLeagues = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { pageno, count } = req.query;
    const numPerPage = Number(count) || 1000;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if (role > 0 && userid > 0) {
      let dbData = await connectDB.query(`select l.leagueid, l.leaguename, l.customid, u.userfirstname, u.userlastname, l.createdby from leagues l left join userleagues ul on ul.leagueid = l.leagueid left join users u on u.userid = ul.userid where l.isActive = true and ul.userid = ${userid} order by 1 desc limit ${limit}`);
      if (dbData && dbData.length > 0) {
        const unique = [...new Set(dbData.map(x => x.leagueid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = unique.map(a => {
          return {
            leagueid: a,
            leaguename: dbData.filter(xx => xx.leagueid == a)[0].leaguename,
            customid: dbData.filter(xx => xx.leagueid == a)[0].customid,
            manager: `${dbData.filter(xx => xx.leagueid == a)[0].userfirstname} ${dbData.filter(xx => xx.leagueid == a)[0].userlastname}`,
            createdby: dbData.filter(xx => xx.leagueid == a)[0].createdby,
          }
        });
        constants.apiResponse.totalCount = constants.apiResponse.data.length;
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getMyJoinedLeagues';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

module.exports = {
  createleague,
  getleague,
  getMyLeagues,
  getLeaguePlayers,
  joinleague,
  createEditLeague,
  getAllTeams,
  getMyJoinedLeagues,
}