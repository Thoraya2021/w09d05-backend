const express = require("express");
const authentication =require('./../../routers/middleware/authentication')
//const authorization=require('./../../routers/middleware/authorization')
const { create, roles } = require("./../controllers/role");
const roleRouter = express.Router();
roleRouter.post("/create", authentication, create);
roleRouter.get("/roles",authentication, roles);

module.exports = roleRouter;