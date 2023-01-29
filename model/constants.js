const { StatusCodes } = require("http-status-codes")

const zeroApiResponse = {
    data: {},
    msg: "",
    error: "",
    code: 0,
    totalCount: 0,
}

let apiResponse = {
    data: {},
    msg: "",
    error: "",
    code: 0,
    totalCount: 0,
}

const notAuthorize = {
    data: {},
    msg: "Not Authorized",
    error: "Not Authorized",
    code: StatusCodes.UNAUTHORIZED,
}

const notWorking = {
    data: {},
    msg: "Something went wrong",
    error: "Something went wrong",
    code: StatusCodes.BAD_REQUEST,
}

const infoRequired = {
    data: "Kindly provide proper information",
    msg: "Kindly provide proper information",
    error: "Kindly provide proper information",
    code: StatusCodes.BAD_REQUEST,
}

const userNotExist = {
    data: "User does not exist",
    msg: "User does not exist",
    error: "User does not exist",
    code: StatusCodes.CONFLICT,
}

const dataNotExist = {
    data: "Data does not exist",
    msg: "Data does not exist",
    error: "Data does not exist",
    code: StatusCodes.CONFLICT,
}

const deleteEntity = {
    league: 1,
    player: 2,
    management: 3,
    userleagues: 4,
    userpicks: 5,
}

const toVerify = {
    superadmin: 1,
    admin: 2,
    manager: 3,
    player: 4,
    league: 5,
    userleagues: 5,
    userpicks: 6,
}

const constraints = {
    teams: 32,
    week: 18,
    eventsperweek: 16,
}

const constants = {
    apiResponse: apiResponse,
    notAuthorize: notAuthorize,
    notWorking: notWorking,
    infoRequired: infoRequired,
    userNotExist: userNotExist,
    deleteEntity: deleteEntity,
    toVerify: toVerify,
    dataNotExist: dataNotExist,
    zeroApiResponse: zeroApiResponse,
    constraints: constraints,
}

exports.constants = constants