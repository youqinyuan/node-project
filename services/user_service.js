const UserDao = require("../dao/user_dao.js");
const UserService = {
	//注册
	register(req, res, next) {
		// 获取用户注册的信息：POST请求中的数据
		const {username,date,phonenumber,password,type} = req.body;
		//console.log({username,date,phonenumber,password});
		UserDao.save({username,date,phonenumber,password,type})
					.then((data)=>{ // 保存成功
						res.json({res_code:1, res_error: "", res_body: {data: {username,reg_time: data.reg_time}}});
					})
					.catch((err)=>{
						res.json({res_code: 0, res_error: err, res_body: {}});
					});
	},
	find(req,res,next){
		//获取查询的页码
		//console.log(index);
		const {page} = req.body;
		//console.log({page});
		//查询
		UserDao.findByPage(page)
							.then((data)=>{
								//console.log(data);
								res.json({res_code:1, res_error:"", res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code:1, res_error:err, res_body:{}});
							});
	},
	//分页
	page(req,res,next){
		UserDao.findpage()
				.then((data)=>{
					//console.log(data);
					res.json({number:data});
				})
				.catch();
	},
	//删除
	remove(req,res,next){
		const {_id} = req.body;
		console.log({_id});
		UserDao.deleteuser(_id)
							.then((data)=>{
								//console.log(data);
								res.json({res_code:1, res_error:"", res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code:1, res_error:err, res_body:{}});
							});
				
	},
	//更新
	update(req,res,next){
		const {_id,username,date,phonenumber} =req.query;
		console.log({_id,username,date,phonenumber});
		UserDao.updateuser({_id},{username,date,phonenumber})
					.then((data)=>{
						//console.log(data);
						res.json({res_code:1, res_error:"", res_body:{data}});
					})
					.catch((err)=>{
						res.json({res_code:1, res_error:err, res_body:{}});
					});
	},
	//模糊查询
	query(req,res,next){
		const {username} = req.query;
		console.log({username});
		UserDao.queryuser(username)
							.then((data)=>{
								//console.log(data);
								res.json({res_code:1, res_error:"", res_body:{data}});
							})
							.catch((err)=>{
								res.json({res_code:1, res_error:err, res_body:{}});
							});
	}
//	
};

module.exports = UserService;
