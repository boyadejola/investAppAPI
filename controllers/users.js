const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const { checkDeleteAuthority } = require('../middleware/authentication');
const { constants } = require('../model/constants');
const data = require('../model/roles.json');

const getUsers = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { pageno, count } = req.query;
    const numPerPage = Number(count) || 10;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if (role > 0 && role != data.player) {
      const defRole = role == data.super_admin ? [data.super_admin, data.admin, data.manager] :
        role == data.admin ? [data.admin, data.manager] :
          role == data.manager ? [data.manager] :
            0;
      const users = await connectDB.query(`select u.userid, u.roleid, u.userfirstname, u.userlastname, u.email, u.createdon, l.leaguename from users u left join leagues l on l.createdby = u.userid where u.isActive = true and roleid in (${defRole}) order by 1 desc limit ${limit}`);
      if (users && users.length > 0) {
        const unique = [...new Set(users.map(x => x.userid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = unique.map(a => {
          return {
            userid: users.filter(xx => xx.userid == a)[0].userid,
            roleid: users.filter(xx => xx.userid == a)[0].roleid,
            // status: users.filter(xx => xx.userid == a)[0].statusid,
            userfirstname: users.filter(xx => xx.userid == a)[0].userfirstname,
            userlastname: users.filter(xx => xx.userid == a)[0].userlastname,
            email: users.filter(xx => xx.userid == a)[0].email,
            createdon: users.filter(xx => xx.userid == a)[0].createdon,
            leagueName: users.filter(xx => xx.userid == a).map(xc => {
              return xc.leaguename
            })
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
    constants.apiResponse.msg = 'api_getUsers';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getPlayers = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { pageno, count } = req.query;
    const numPerPage = Number(count) || 10;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if (role > 0) {
      const defRole = data.player;
      const users = await connectDB.query(`select u.userid, u.roleid, u.userfirstname, u.userlastname, u.email, u.createdon, l.leaguename from users u left join userleagues ul on ul.userid = u.userid left join leagues l on l.leagueid = ul.leagueid where u.isActive = true and roleid in (${defRole}) order by 1 desc limit ${limit}`);
      if (users && users.length > 0) {
        const unique = [...new Set(users.map(x => x.userid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = unique.map(a => {
          return {
            userid: users.filter(xx => xx.userid == a)[0].userid,
            roleid: users.filter(xx => xx.userid == a)[0].roleid,
            // status: users.filter(xx => xx.userid == a)[0].statusid,
            userfirstname: users.filter(xx => xx.userid == a)[0].userfirstname,
            userlastname: users.filter(xx => xx.userid == a)[0].userlastname,
            email: users.filter(xx => xx.userid == a)[0].email,
            createdon: users.filter(xx => xx.userid == a)[0].createdon,
            leagueName: users.filter(xx => xx.userid == a).map(xc => {
              return xc.leaguename
            })
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
    constants.apiResponse.msg = 'api_getPlayers';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getSpecificUser = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { id: specUserID } = req.params;
    if ((role == data.super_admin || role == data.admin) && specUserID > 0) {
      const dbData = await connectDB.query(`select * from users where userid = ${specUserID}`);
      if (dbData && dbData.length > 0) {
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = dbData.map(a => {
          return {
            email: a.email,
            firstName: a.userfirstname,
            lastName: a.userlastname,
            // status: a.statusid,
            role: a.roleid,
            joinedOn: a.createdon,
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
    constants.apiResponse.msg = 'api_getSpecificUser';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const updateSpecificUser = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { id, firstName, lastName, roleid, email, newpassword } = req.body;
    if ((role == data.super_admin || role == data.admin) && id > 0 && userid > 0) {
      if (!firstName || !role || !email) return res.status(StatusCodes.BAD_REQUEST).json(constants.infoRequired);

      const user = await connectDB.query("select * from users where userid = ?", [id]);
      if (user && user.length > 0) {
        let query = `update users set userfirstname = '${firstName}', userlastname = '${lastName}', roleid = ${roleid}, email = '${email}', updatedon = now(), updatedby = ${userid}`;
        if (newpassword) {
          let hashedPassword = await bcrypt.hash(newpassword, 8);
          query += `, password = ${hashedPassword}`;
        }
        query += ` where userid = ${id};`
        const dbData = await connectDB.query(query);
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.msg = "User's information updated";
        constants.apiResponse.data = "User's information updated";
        return res.status(StatusCodes.OK).json(constants.apiResponse);
      }
      else return res.status(StatusCodes.CONFLICT).json(constants.userNotExist);
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_updateSpecificUser';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const deleteZombData = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { row, entity, leagueid } = req.body;
    if (entity && row && userid) {
      if (entity == constants.deleteEntity.management) {
        const checkManageQuery = `select * from users where userid = ${row} and isactive = true and roleid in (${data.admin}, ${data.manager}, ${data.super_admin})`;
        const dbManage = await connectDB.query(checkManageQuery);
        if (dbManage && dbManage.length > 0 && dbManage[0].roleid != data.super_admin) {
          if (checkDeleteAuthority(role, dbManage[0].roleid)) {
            const query = `UPDATE users SET updatedon = now(), updatedby = ${userid}, isactive = false WHERE (userid = ${dbManage[0].userid})`;
            const ress = await connectDB.query(query);
            constants.apiResponse.code = StatusCodes.OK;
            constants.apiResponse.data = 'User has been deleted';
            constants.apiResponse.msg = 'User has been deleted';
            return res.status(StatusCodes.OK).json(constants.apiResponse);
          } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
        }
        else {
          if (dbManage[0].roleid == data.super_admin) {
            constants.apiResponse.code = StatusCodes.CONFLICT;
            constants.apiResponse.data = 'Super admin cannot be deleted';
            constants.apiResponse.msg = 'Super admin cannot be deleted';
            constants.apiResponse.error = 'Super admin cannot be deleted';
            return res.status(StatusCodes.CONFLICT).json(constants.apiResponse);
          }
          return res.status(StatusCodes.CONFLICT).json(constants.userNotExist)
        };
      }
      else if (entity == constants.deleteEntity.league) {
        const checkManageQuery = `select * from leagues where isactive = true and leagueid = ${row}`;
        const dbManage = await connectDB.query(checkManageQuery);
        if (dbManage && dbManage.length > 0) {
          if (checkDeleteAuthority(role, constants.toVerify.league)) {
            if (role == data.manager) {
              if (dbManage[0].createdby != userid) return res.status(StatusCodes.OK).json(constants.notAuthorize);
            }
            const query = `UPDATE leagues SET isactive = false , updatedon = now(), updatedby = ${userid} WHERE (leagueid = ${dbManage[0].leagueid})`;
            const ress = await connectDB.query(query);
            constants.apiResponse.code = StatusCodes.OK;
            constants.apiResponse.data = 'League has been deleted';
            constants.apiResponse.msg = 'League has been deleted';
            return res.status(StatusCodes.OK).json(constants.apiResponse);
          } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
        } else return res.status(StatusCodes.CONFLICT).json(constants.dataNotExist);
      }
      else if (entity == constants.deleteEntity.player) {
        const checkManageQuery = `select * from users where userid = ${row} and isactive = true and roleid = ${data.player}`;
        const dbManage = await connectDB.query(checkManageQuery);
        if (dbManage && dbManage.length > 0) {
          if (checkDeleteAuthority(role, dbManage[0].roleid)) {
            const query = `UPDATE users SET updatedon = now(), updatedby = ${userid}, isactive = false WHERE (userid = ${dbManage[0].userid})`;
            const ress = await connectDB.query(query);
            constants.apiResponse.code = StatusCodes.OK;
            constants.apiResponse.data = 'User has been deleted';
            constants.apiResponse.msg = 'User has been deleted';
            return res.status(StatusCodes.OK).json(constants.apiResponse);
          } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
        } else return res.status(StatusCodes.CONFLICT).json(constants.userNotExist);
      }
      else if (entity == constants.deleteEntity.userleagues) {
        const checkManageQuery = `select * from userleagues ul where ul.isactive = true and ul.userid = ${row} and leagueid = ${leagueid}`;
        const dbManage = await connectDB.query(checkManageQuery);
        if (dbManage && dbManage.length > 0) {
          let isAllowed = true;
          if (role == data.manager) {
            isAllowed = false;
            const checkPerm = `select * from leagues where leagueid = ${leagueid} and isactive = true`;
            const dbPerm = await connectDB.query(checkPerm);
            if (dbPerm && dbPerm.length > 0) {
              if (dbPerm[0].createdby == userid) {
                isAllowed = true;
              }
            }
          }
          if (checkDeleteAuthority(role, constants.toVerify.userleagues) && isAllowed) {
            const query = `UPDATE userleagues SET isactive = false, updatedby = ${userid}, updatedon = now() WHERE (userleagueid = ${dbManage[0].userleagueid})`;
            const ress = await connectDB.query(query);
            constants.apiResponse.code = StatusCodes.OK;
            constants.apiResponse.data = 'User has been deleted';
            constants.apiResponse.msg = 'User has been deleted';
            return res.status(StatusCodes.OK).json(constants.apiResponse);
          } else return res.status(StatusCodes.OK).json(constants.notAuthorize);
        } else return res.status(StatusCodes.CONFLICT).json(constants.userNotExist);
      }
      else if (entity == constants.deleteEntity.userpicks) {
        const dbManage = await connectDB.query(`select userpickid from userpicks where userpickid = ${row}`);
        if (dbManage && dbManage.length > 0) {
          const del = await connectDB.query(`delete from userpicks where userpickid = ${row}`);
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.data = 'Pick has been deleted';
          constants.apiResponse.msg = 'Pick has been deleted';
          return res.status(StatusCodes.OK).json(constants.apiResponse);
        }
        else return res.status(StatusCodes.CONFLICT).json(constants.userNotExist);
      }
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_deleteZombData';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

module.exports = {
  getUsers,
  getPlayers,
  getSpecificUser,
  updateSpecificUser,
  deleteZombData,
}