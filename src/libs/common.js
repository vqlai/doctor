let $ = require("jquery");
let serverPath = "http://192.168.5.159:7000/V1/";

exports.showTip = function(msg,time){
	let tip = $("<div class='common_tip' style='position: fixed;top:45%;width: 61.8%;left: 19.1%;background: rgba(0,0,0,0.7);padding:14px 6px;font-size: 1.1rem;color: #FFF;z-index:9999;text-align:center;border-radius: 8px;display:none;'>"+msg+"</div>");
	tip.appendTo('body').fadeIn();
	setTimeout(function(){
		tip.fadeOut('fast', function() {
			$(this).remove();
		});
	},time?time:2000);
	return tip;
}
exports.doAjax = function(url,options){
	options =$.extend({type:"POST",data:{},timeout:30000,async:true,urlPrefix:true,loading:false,isNeedToken:true,crossDomain:true,
		dataType:"json",showErrorMsg:true}, options);
	options.url = (options.urlPrefix?serverPath:"")+url;
	if(options.isNeedToken){
		options.data.token = exports.getCookie("token");
	}
	let ajax =  $.ajax(options)
		.fail(function() {
			exports.showTip("加载失败,请稍后再试！");
		});
	if(options.showErrorMsg){
		ajax.done(function(result){
			if(result.code != 1){
				exports.showTip(result.msg);
			}
		});
	}
	return ajax;
}

//检查手机号码
exports.checkPhone = function(phone){
	return /^1[34578][0-9]{9}$/.test(phone);
}
//检查短信验证码
exports.checkPhoneCode = function(code){
	return /[\d]{4}/.test(code);
}
//检查银行卡卡号
exports.checkCardNum = function(num){
	return /^\d{15,20}$/.test(num);
}
//检查密码
exports.checkPassword = function(num){
	return /^.{6,18}$/.test(num);
}
//检查真实姓名
exports.checkRealName = function(name){
	return /^[\u4e00-\u9fa5]{2,20}$/.test(name);
}
//检查邮箱
exports.checkEmail = function(mail){
	return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}
//判断是否微信
exports.isWeiXin = function(){
    return window.navigator.userAgent.toLowerCase().indexOf('micromessenger')>-1;
}
//新增cookie date cookie存活的时间
exports.setCookie = function (name,value,date){
	let text = name + '=' + value;
	if (typeof date === 'number') {
		var expires = date;
	    date = new Date();
	    date.setTime(date.getTime() + (expires*1000));
	}
	 if (date instanceof Date) {
        text += ';path=/; expires=' + date.toUTCString();
    }
    document.cookie = text;
}
//根据键值对获取cookie
exports.getCookie = function (name){
	let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return (arr[2]);
	else
		return "";
}
//获取URL参数
exports.getQueryString = function(name) {
   let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   let r = window.location.search.substr(1).match(reg);
   if (r!=null) return (r[2]); return null;
}
