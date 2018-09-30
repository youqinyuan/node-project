//引入mongoose
const mongoose = require("mongoose");
//连接mongodb数据库
mongoose.connect('mongodb://localhost/node_project');
// 创建用户Schema
const userSchema = new mongoose.Schema({
	username : String,
//	sex : String,
	date : String,
	phonenumber : String,
	password:String,
	type:String,
	reg_time : Date
});
// 根据用户Schema创建用户模型
const User = mongoose.model("user", userSchema);
module.exports = User;
