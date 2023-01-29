const { StatusCodes } = require('http-status-codes');
const connectDB = require('../db/connect');
const BadRequestError = require('../errors');
const { extractTeams, isEmptyObject } = require('../middleware/authentication');
const { constants } = require('../model/constants');
const data = require('../model/roles.json');

const getUserPicks = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    // const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { pageno, count, weekno, leagueid } = req.query;
    const numPerPage = Number(count) || 10;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if (userid > 0) {
      let query = `select up.*, l.leaguename, t.name, t.abbreviation, t.displayname, t.shortname, t.location, t.logo from userpicks up inner join leagues l on l.leagueid = up.leagueid inner join teams t on t.eteamid = up.teamid where up.userid = ${userid}`;
      if (weekno && weekno > 0) {
        query += ` and up.weekno=${weekno}`;
      }
      if (leagueid && leagueid > 0) {
        query += ` and up.leagueid=${leagueid}`;
      }
      query += ` order by 1 desc limit ${limit}`;
      const userpicks = await connectDB.query(query);
      if (userpicks && userpicks.length > 0) {
        const unique = [...new Set(userpicks.map(x => x.userpickid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = unique.map(a => {
          return {
            userpickid: a,
            teamid: userpicks.filter(xx => xx.userpickid == a)[0].teamid,
            userid: userpicks.filter(xx => xx.userpickid == a)[0].userid,
            leagueid: userpicks.filter(xx => xx.userpickid == a)[0].leagueid,
            weekno: userpicks.filter(xx => xx.userpickid == a)[0].weekno,
            inprogress: userpicks.filter(xx => xx.userpickid == a)[0].inprogress,
            result: userpicks.filter(xx => xx.userpickid == a)[0].result,
            matchdate: userpicks.filter(xx => xx.userpickid == a)[0].matchdate,
            eventid: userpicks.filter(xx => xx.userpickid == a)[0].eventid,
            leaguename: userpicks.filter(xx => xx.userpickid == a)[0].leaguename,
            eteamid: userpicks.filter(xx => xx.userpickid == a)[0].eteamid,
            name: userpicks.filter(xx => xx.userpickid == a)[0].name,
            abbreviation: userpicks.filter(xx => xx.userpickid == a)[0].abbreviation,
            displayname: userpicks.filter(xx => xx.userpickid == a)[0].displayname,
            shortname: userpicks.filter(xx => xx.userpickid == a)[0].shortname,
            location: userpicks.filter(xx => xx.userpickid == a)[0].location,
            logo: userpicks.filter(xx => xx.userpickid == a)[0].logo,
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
    constants.apiResponse.msg = 'api_getUserPicks';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const insertUserPick = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    // const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { weekno, leagueid, eteamid, eventid, matchdate, oteamid } = req.body;
    if (userid > 0) {
      if (!weekno || !leagueid || !eteamid || !eventid || !matchdate || !oteamid) return res.status(StatusCodes.BAD_REQUEST).json(constants.infoRequired);
      let allow = true;
      let pwz = false;
      const checkAllow = await connectDB.query(`select distinct up.userpickid, u.userid, up.weekno, up.teamid, ul.leagueid, ul.statusid from userpicks up inner join users u on u.userid = up.userid inner join userleagues ul on ul.userid = u.userid where u.isactive = true and up.userid = ${userid} and up.weekno = ${weekno} and up.leagueid = ${leagueid} order by up.userpickid desc`);
      if (checkAllow && checkAllow.length > 0) {
        const uniquePicks = [...new Set(checkAllow.map(x => x.userpickid))];
        const picks = uniquePicks.length;
        const da = checkAllow.filter(a => a.userpickid == uniquePicks[0]);
        if (da[0].statusid || da[0].statusid == 1) {
          pwz = true;
          if (picks > 0) {
            allow = false;
          }
        }
        else {
          if (picks > 1) {
            allow = false;
          }
        }
        if (allow) {
          if (da.filter(a => a.eventid == eventid) && da.filter(a => a.eventid == eventid).length > 0) {
            allow = false;
          }
        }
      }
      if (allow) {
        const insertPick = await connectDB.query(`INSERT INTO userpicks (teamid, oteamid, userid, leagueid, weekno, inprogress, result, matchdate, eventid, pwz) VALUES (${eteamid}, ${oteamid}, ${userid}, ${leagueid}, ${weekno}, true, false, now(), ${eventid}, ${pwz})`);
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.msg = "Pick has been chosen";
        constants.apiResponse.data = "Pick has been chosen";
        return res.status(StatusCodes.OK).json(constants.apiResponse);
      }
      else {
        constants.apiResponse.code = StatusCodes.CONFLICT;
        constants.apiResponse.msg = "Pick limit has reached";
        constants.apiResponse.data = "Pick limit has reached";
        constants.apiResponse.error = "Pick limit has reached";
        return res.status(StatusCodes.CONFLICT).json(constants.apiResponse)
      };
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_insertUserPick';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getLeagueScoreboard = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const { pageno, count, leagueid } = req.query;
    const numPerPage = Number(count) || 10;
    const page = Number(pageno) || 1;
    const skip = (page - 1) * numPerPage;
    const limit = skip + ',' + numPerPage;
    if (leagueid > 0) {
      let query = `select distinct up.*, u.userfirstname, u.userlastname, ul.statusid from userpicks up inner join users u on u.userid = up.userid inner join userleagues ul on up.leagueid = ul.leagueid where up.leagueid = ${leagueid} order by up.userpickid desc`; // limit ${limit}
      const picksData = await connectDB.query(query);
      if (picksData && picksData.length > 0) {
        const uniqueUsers = [...new Set(picksData.map(x => x.userid))];
        const uniquePicks = [...new Set(picksData.map(x => x.userpickid))];
        constants.apiResponse.code = StatusCodes.OK;
        constants.apiResponse.data = uniqueUsers.map((e, i) => {
          let whileZombie = 0;
          let correct = 0;
          uniquePicks.map(xx => {
            if (picksData.filter(zx => zx.userpickid == xx && zx.userid == e).length > 0 &&
              picksData.filter(zx => zx.userpickid == xx && zx.userid == e)[0].pwz) {
              whileZombie += 1;
            }
            if (picksData.filter(zx => zx.userpickid == xx && zx.userid == e).length > 0 &&
              picksData.filter(zx => zx.userpickid == xx && zx.userid == e)[0].result) {
              correct += 1;
            }
          });
          return {
            userid: e,
            firstName: picksData.filter(xx => xx.userid == e)[0].userfirstname,
            lastName: picksData.filter(xx => xx.userid == e)[0].userlastname,
            week1: extractTeams(picksData, e, 1, uniquePicks),
            week2: extractTeams(picksData, e, 2, uniquePicks),
            week3: extractTeams(picksData, e, 3, uniquePicks),
            week4: extractTeams(picksData, e, 4, uniquePicks),
            week5: extractTeams(picksData, e, 5, uniquePicks),
            week6: extractTeams(picksData, e, 6, uniquePicks),
            week7: extractTeams(picksData, e, 7, uniquePicks),
            week8: extractTeams(picksData, e, 8, uniquePicks),
            week9: extractTeams(picksData, e, 9, uniquePicks),
            week10: extractTeams(picksData, e, 10, uniquePicks),
            week11: extractTeams(picksData, e, 11, uniquePicks),
            week12: extractTeams(picksData, e, 12, uniquePicks),
            week13: extractTeams(picksData, e, 13, uniquePicks),
            week14: extractTeams(picksData, e, 14, uniquePicks),
            week15: extractTeams(picksData, e, 15, uniquePicks),
            week16: extractTeams(picksData, e, 16, uniquePicks),
            week17: extractTeams(picksData, e, 17, uniquePicks),
            week18: extractTeams(picksData, e, 18, uniquePicks),
            correct: correct,
            pwz: whileZombie,
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
    constants.apiResponse.msg = 'api_getLeagueScoreboard';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const getStatsCheck = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const { season, type, week } = req.query;
    if (season && type && week) {
      const dumpCheckQuery = `select * from statistics where year = ${season} and type = ${type} and week = ${week};`;
      const dumpCheck = await connectDB.query(dumpCheckQuery);
      if (dumpCheck && dumpCheck.length > 0 && dumpCheck.length >= constants.constraints.teams) {
        const notCompleteList = dumpCheck.filter(a => a.iscompleted == false || a.iscompleted == 0);
        if (notCompleteList && notCompleteList.length > 0) {
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.data = notCompleteList;
        }
        else {
          // just to update userpicks in case there are all events completed
          updateUserPicks();
        }
      } else {
        constants.apiResponse.code = StatusCodes.CONFLICT;
        constants.apiResponse.msg = 'All events are not dumped';
        constants.apiResponse.data = 'All events are not dumped';
        constants.apiResponse.error = 'All events are not dumped';
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    else return res.status(StatusCodes.OK).json(constants.notAuthorize);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_getStatsCheck';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const postStatsService = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    const userid = req.user && req.user.userid ? req.user.userid : 0;
    const role = req.user && req.user.roleid ? req.user.roleid : 0;
    const { eventlist, week, type, isupdate, season } = req.body;
    if (eventlist && !isEmptyObject(eventlist) && week && season && type) {
      if (isupdate) {
        let upsql = '';
        eventlist.length > 0 && eventlist.map(a => {
          const { iswin, iscompleted, statsid } = a;
          if (statsid) {
            upsql += `UPDATE statistics SET iswin = ${iswin ? iswin : false}, iscompleted = ${iscompleted ? iscompleted : false}, updatedon = now(), updatedby = ${userid ? userid : 0} WHERE (statisticid = ${statsid}); `;
          }
        });
        if (upsql) {
          const update = await connectDB.query(upsql);
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.data = "updated";
          constants.apiResponse.msg = "updated";
          updateUserPicks();
        }
      } else {
        const dumpCheckQuery = `select * from statistics where year = ${season} and type = ${type} and week = ${week};`;
        const dumpCheck = await connectDB.query(dumpCheckQuery);
        let upsqll = '';
        let uptodata = {};
        let insql = "INSERT INTO `statistics` (`teamid`, `oteamid`, `eventid`, `year`, `week`, `type`, `iswin`, `iscompleted`, `createdon`, `createdby`) VALUES";
        let values = '';
        eventlist.length > 0 && eventlist.map((a, i) => {
          const { teamid, oteamid, year, iswin, iscompleted, eventid } = a;
          let allow = true;
          let allowUpdate = false;
          if (!year || !teamid || !eventid) {
            allow = false;
          }
          // 1 event id only two times check
          if (allow && dumpCheck && dumpCheck.length > 0) {
            if (dumpCheck.filter(a => a.eventid == eventid) && dumpCheck.filter(a => a.eventid == eventid).length > 1) {
              allow = false;
              const updata = dumpCheck.filter(v => !v.iscompleted && v.teamid == teamid);
              if (updata && updata.length > 0) {
                allowUpdate = true;
                uptodata = updata[0];
              }
            }
          }
          if (allow) {
            // const inpush = [
            //   parseInt(teamid),
            //   oteamid ? parseInt(oteamid) : 0,
            //   `${eventid}`,
            //   year,
            //   week,
            //   parseInt(type),
            //   iswin ? iswin : false,
            //   iscompleted ? iscompleted : false,
            //   new Date(),
            //   userid ? userid : 0
            // ];
            // values.push(inpush);
            insql += " ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}) " + `${i < (eventlist.length - 1) ? ", " : ";"}`;
            insql = `${insql
              .replace("{0}", parseInt(teamid))
              .replace("{1}", oteamid ? parseInt(oteamid) : 0)
              .replace("{2}", `${eventid}`)
              .replace("{3}", `${year}`)
              .replace("{4}", parseInt(week))
              .replace("{5}", parseInt(type))
              .replace("{6}", iswin ? iswin : false)
              .replace("{7}", iscompleted ? iscompleted : false)
              .replace("{8}", 'now()')
              .replace("{9}", userid ? userid : 0)} `;
          }
          else if (allowUpdate && uptodata && !isEmptyObject(uptodata)) {
            upsqll += `UPDATE statistics SET iswin = ${iswin ? iswin : false}, iscompleted = ${iscompleted ? iscompleted : false}, updatedon = now(), updatedby = ${userid ? userid : 0} WHERE (statisticid = ${uptodata.statisticid}); `;
          }
        });
        if (insql && insql.includes('VALUES (')) { //values && values.length > 0
          const dumpChsadeck = await connectDB.query(insql);
          // await connectDB.query(insql, [values], function (err, result, fields) {
          //   if (err) throw err;
          //   if (result) {
          //     const asd = 1;
          //   }
          //   connectDB.end();
          // });
          constants.apiResponse.code = StatusCodes.OK;
          constants.apiResponse.data = "inserted";
          constants.apiResponse.msg = "inserted";
        }
        if (upsqll && upsqll != '') {
          const update = await connectDB.query(upsqll);
          constants.apiResponse.data += " & updated";
          constants.apiResponse.msg += " & updated";
        }
        constants.apiResponse.code = StatusCodes.OK;
        updateUserPicks();
      }
      return res.status(StatusCodes.OK).json(constants.apiResponse);
    }
    else return res.status(StatusCodes.OK).json(constants.infoRequired);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_postStatsService';
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

const updatePicksDataService = async (req, res) => {
  try {
    constants.apiResponse.code = 0;
    constants.apiResponse.msg = '';
    constants.apiResponse.data = {};
    constants.apiResponse.error = '';
    // const userid = req.user && req.user.userid ? req.user.userid : 0;
    // const role = req.user && req.user.roleid ? req.user.roleid : 0;
    updateUserPicks();
    constants.apiResponse.code = StatusCodes.OK;
    return res.status(StatusCodes.OK).json(constants.apiResponse);
  }
  catch (err) {
    constants.apiResponse.data = 'Server error, check connections';
    constants.apiResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
    constants.apiResponse.error = err;
    constants.apiResponse.msg = 'api_helper_updateUserPicks';
    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(constants.apiResponse);
  }
}

async function updateUserPicks() {
  const picksCheckQuery = `select * from userpicks where inprogress = true`;
  const picksCheck = await connectDB.query(picksCheckQuery);
  if (picksCheck && picksCheck.length > 0) {
    const eventIDs = [...new Set(picksCheck.map(x => x.eventid))];
    const statsQuery = `select * from statistics where eventid in (${eventIDs}) and iscompleted = true`;
    const statsCheck = await connectDB.query(statsQuery);
    if (statsCheck && statsCheck.length > 0) {
      let upsql = '';
      statsCheck && statsCheck.length > 0 &&
        statsCheck.map(zx => {
          const da = picksCheck.filter(q => q.eventid == zx.eventid);
          if (da && da.length > 0) {
            da.map(bb => {
              if (bb.teamid == zx.teamid) {
                upsql += `UPDATE userpicks SET inprogress = false, result = ${zx.iswin ? zx.iswin : false} WHERE (userpickid = ${bb.userpickid}); `
              }
            });
          }
        });
      const update = await connectDB.query(upsql);
    }
  }
}

module.exports = {
  getUserPicks,
  insertUserPick,
  getLeagueScoreboard,
  getStatsCheck,
  postStatsService,
  updatePicksDataService
}