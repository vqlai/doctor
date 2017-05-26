import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import FastClick from 'fastclick';
import common from './libs/common.js';
import ltHead from 'components/header.vue'
import filters from './filters';

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter);
// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
const router = new VueRouter({routes});
// FastClick挂载在body上，改造所有元素的click事件
FastClick.attach(document.body);
// 给Vue的原型上添加common,可以在Vue的实例中随意调用它
Vue.prototype.common = common;
let vm;
//注册全局组件
Vue.component("lt-head",ltHead);
//没有token  重新获取
if (!common.getCookie("token")) {
	getToken().done(result=>{
		if(result.code == 1){
			init();
		}
	});
}else{
	init();
}
//获取token
function getToken(){
	return common.doAjax("Token/noAuthCreate",{isNeedToken:false})
		.done(result=>{
			if(result.code == 1){
				common.setCookie("token",result.extra.sess.token,new Date(result.extra.sess.expires*1000));
			}
		})
}
//初始化VUE
function init(){
	vm = new Vue({router}).$mount('#app');
}
//正在运行标识
let isRun = false;
//公共请求错误处理
$(document).ajaxSuccess(function(event, xhr, settings) {
	let path = vm.$route.path;
	var code = $.parseJSON(xhr.responseText).code;
	//token错误
	if(code == 3 && !isRun){
		isRun = true;
		 getToken().done(result=>{
		 	isRun = false;
		 	if(result.code == 1){
				router.go(0);
			}
		 });
	}else if(code == 4){ //登录失败
		router.push({name:"login",query:{path:path}})
	}
});