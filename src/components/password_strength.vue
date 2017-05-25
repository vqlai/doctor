<template>
	<div class="password_strength_box">
        <input type="password" placeholder="请输入新密码" maxlength="20" class="common_input" v-model.trim="password" v-on:input="getCurPwd($event.target.value)">
        <span :class="status"></span>
    </div> 
</template>

<script>
    export default {
        name: 'strength',
        data: function() {
            return {
                password: '',
                status: ''
            }
        },
        watch: {
            password: function (val, oldVal) {
                if(val == "" || val.length < 6){
                    this.status = '';
                    return;
                }
                var level;
                var reg = new RegExp("([0-9]+)");
                if(reg.test(val)){
                    level = 1;
                }
                reg = new RegExp("([a-z]+)")
                if(reg.test(val)){
                    level = 2;
                }
                reg = new RegExp("([A-Z]+)")
                if(reg.test(val)){
                    level = 3;
                }
                reg = new RegExp("([^a-zA-Z0-9]+)")
                if(reg.test(val)){
                    level = 4;
                }
                if(level == 1){
                    this.status = "status3";
                }else if(level == 4){
                    this.status = "status1";
                }else{
                    this.status = "status2";
                }
            }
        },
        methods: {
            getCurPwd: function(value){
                // 通过 input 事件发出数值
                this.$emit('input', (value))
            }
        }
    }
</script>

<style scoped>
	.password_strength_box{position: relative;}
    .password_strength_box span{position: absolute;top:50%;right: .6rem;}
    .password_strength_box span.status1{color: #489bff;}
    .password_strength_box span.status1:after{content: '高';}
    .password_strength_box span.status2{color: #ffbe22;}
    .password_strength_box span.status2:after{content: '中';}
    .password_strength_box span.status3{color: #ff3333;}
    .password_strength_box span.status3:after{content: '低';}
</style>