import $ from 'jquery';
import common from 'src/libs/common.js';

//检查手机号码
exports.checkPhone = function(val,succCallback){
	let phone = val;
	if(phone == ""){
		common.showTip("请输入您的手机号码");
		return;
	}
	if(!common.checkPhone(phone)){
		common.showTip("请输入正确的手机号码");
		return;
	}
	return true;
	// common.doAjax({
	// 	url:"User/getPwd",
	// 	data:{phone:phone},
	// 	callback:function(result){
	// 		if(result.code == "1002"){
	// 			succCallback();
	// 		}else{
	// 			common.showTip(result.msg);
	// 		}
	// 	}
	// })
}
//检查密码
exports.checkPassword = function(val,succCallback) {
	let password = val;
	if(password == ""){
		common.showTip("请输入您的密码");
		return;
	}
	if(!common.checkPassword(password)){
		common.showTip("请输入正确的密码");
		return;
	}
	return true;
}
//检测验证码
exports.checkPhoneCode = function(val,succCallback) {
	let code = val;
	if(code == ""){
		common.showTip("请输入您的验证码");
		return;
	}
	if(!common.checkPhoneCode(code)){
		common.showTip("请输入正确的验证码");
		return;
	}
	// common.doAjax(url,{
	// 	data: {},
	// 	callback: function(){

	// 	}
	// });
	return true;
}
//检查姓名
exports.checkName = function(val,succCallback) {
	let name = val;
	if(name == ""){
		common.showTip("请输入您的姓名");
		return;
	}
	if(!common.checkRealName(name)){
		common.showTip("请输入正确的姓名");
		return;
	}
	return true;
}
