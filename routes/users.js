var express = require('express');
var UserService = require("../services/user_service.js");
var router = express.Router();

//配置路由
//注册
router.post("/register", UserService.register);
//查询用户信息
router.post("/find",UserService.find);
//分页
router.get("/page",UserService.page);
//删除
router.post("/remove",UserService.remove);
//修改
router.get("/update",UserService.update);
//模糊查询
router.get("/query",UserService.query);
module.exports = router;
