import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import FastClick from 'fastclick';
import common from './libs/common.js';
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(VueRouter);
const router = new VueRouter({routes});

// FastClick挂载在body上，改造所有元素的click事件
FastClick.attach(document.body);
// 给Vue的原型上添加common,可以在Vue的实例中随意调用它
Vue.prototype.common = common;
new Vue({router}).$mount('#app');
if (!localStorage.token) {
	common.doAjax("Token/noAuthCreate",{isNeedToken:false})
	.done(result=>{
		if(result.code == 1){
			localStorage.token = result.extra.sess.token;
		}
	})
}