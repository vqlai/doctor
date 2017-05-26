const login = resolve => {
     require(['./views/user/login.vue'], resolve);
}
const routers = [{
    path: '/',
    name: 'base',
    // meta: {keepAlive: true},
    component:login
}, {
    path: '/user/login',
    name: 'login',
    component:login
}, {
    path: '/user/forget',
    name: 'forget',
    component(resolve) {
        require(['./views/user/forget.vue'], resolve);
    }
}, {
    path: '/user/register',
    name: 'register',
    meta: {keepAlive: true},
    component(resolve) {
       require(['./views/user/register.vue'], resolve);
    }
}, {
    path: '/user/protocol',
    name: 'protocol',
    component(resolve) {
        require(['./views/user/protocol.vue'], resolve);
    }
}, {
    path: '/user/reset',
    name: 'reset',
    component(resolve) {
        require(['./views/user/reset.vue'], resolve);
    }
},{
    path: '/doctor/index',
    name: 'index',
    component(resolve) {
        require(['./views/doctor/index.vue'], resolve);
    }
},{
    path: '/doctor/doctor',
    name: 'doctor',
    component(resolve) {
        require(['./views/doctor/doctor.vue'], resolve);
    }
},{
    path: '/doctor/search',
    name: 'search',
    component(resolve) {
        require(['./views/doctor/search.vue'], resolve);
    }
},{
    path: '/doctor/evaluation',
    name: 'evaluation',
    component(resolve) {
        require(['./views/doctor/evaluation.vue'], resolve);
    }
},{
    path: '/doctor/advice',
    name: 'advice',
    component(resolve) {
        require(['./views/doctor/advice.vue'], resolve);
    }
},{
    path: '/doctor/home_doctor',
    name: 'home_doctor',
    component(resolve) {
        require(['./views/doctor/home_doctor.vue'], resolve);
    }
},{
    path: '/doctor/img_advice',
    name: 'img_advice',
    component(resolve) {
        require(['./views/doctor/img_advice.vue'], resolve);
    }
},{
    path: '/doctor/record',
    name: 'record',
    component(resolve) {
        require(['./views/doctor/buy_record.vue'], resolve);
    }
},{
    path: '/doctor/center',
    name: 'center',
    component(resolve) {
        require(['./views/doctor/center.vue'], resolve);
    }
},{
    path: '/doctor/pay',
    name: 'pay',
    component(resolve) {
        require(['./views/doctor/pay.vue'], resolve);
    }
},{
    path: '/chat/chat',
    name: 'chat',
    component(resolve) {
        require(['./views/chat/chat.vue'], resolve);
    }
},{
    path: '/help/detail',
    name: 'help_detail',
    component(resolve) {
        require(['./views/help/detail.vue'], resolve);
    }
},{
    path: '/help/list',
    name: 'help_list',
    component(resolve) {
        // require.ensure(['./views/doctor/doctor.vue'], () => {
        //     resolve(require('./views/doctor/doctor.vue'));
        // });
        require(['./views/help/list.vue'], resolve);
    }
}
];

export default routers;