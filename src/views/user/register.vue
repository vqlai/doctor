<template>
    <div>
        <lt-head is-transparent="true"></lt-head>
    
         <div class="pre_container">
            <h3 class="common_tlt">注册普通账户</h3>
            <div class="common_input_box">
                <input type="tel" placeholder="请输入手机号" maxlength="11" class="common_input" v-model.trim="phone">
                <span v-show="phoneclear" @click="clearPhone"></span>
            </div>
            <!-- 通过v-model实现事件监听，从而父组件获取到子组件的值 -->
            <!-- v-on简写@，v-bing简写： -->
            <verfify-code :verifyPhone="phone" :unablebtn="unablecode" ref="code_input" v-model="code" @getCode="sendCode">
                <!-- 组件内的内容要显示需要分发slot -->
                <!-- <p>这是一些初始内容</p> -->
            </verfify-code>
            <pwd-strength  v-model="password"></pwd-strength>
            <div class="common_input_box">
                <input type="text" placeholder="请输入姓名" maxlength="20" class="common_input" v-model.trim="name">
                <span v-show="nameclear" @click="clearname"></span>
            </div>
            <button class="common_btn" @click="goRegister">注册</button>
            <p class="reg_tip">轻触上面的“注册”按钮，即表示您同意</p>
            <router-link  class="reg_protocol" to="/user/protocol">《好医生注册协议》</router-link>
        </div>
    </div>
</template>

<script>
    import register from 'src/libs/registerHelp.js'
    import md5 from 'src/libs/md5.js'
    import verfifyCode from 'components/verify_code.vue'
    import pwdStrength from 'components/password_strength.vue'
    export default {
        name: 'register',
        data: function() {
            return {
                phone: '',
                name: '',
                phoneclear: false,
                nameclear: false,
                //子组件的传回的值
                code: '',
                password: '',
                unablecode: false
            };
        },
        //页面刷新才会挂载，浏览器返回不会挂载
        mounted: function() {
        },
        // 监听数据模型变化
        watch: {
            phone: function (val, oldVal) {
              val ? this.phoneclear=true:this.phoneclear=false;
            },
            name: function (val, oldVal) {
              val ? this.nameclear=true:this.nameclear=false;
            }
        },
        methods: {
           clearPhone: function(){
                this.phone = '';
            },
            clearname: function(){
                this.name = '';
            },
            goRegister: function(){
                // $refs访问子组件，$refs 只在组件渲染完成后才填充，并且它是非响应式的。
                // console.log(this.$refs.code_input.code);
                var _this = this;
                if(register.checkPhone(this.phone) && register.checkPhoneCode(this.code) && register.checkPassword(this.password) && register.checkName(this.name)){
                    this.common.doAjax("User/reg",{
                        data:{
                            user_phone: this.phone,
                            user_pwd: md5.hex_md5(this.password),
                            user_nick_name: this.name,
                            yzm: this.code,
                            client: 1
                        }
                    }).done(function(result){
                        if(result.code == 1){
                            setTimeout(function(){
                                _this.$router.push({
                                    name: 'index'
                                }); 
                            },1000)
                        }
                    })
                }
            },
            sendCode: function(){
                var _this = this;
                this.common.doAjax("User/sendCode",{
                    data:{
                        user_phone:this.phone,
                        action: 'sms_reg'
                    }
                }).done(function(result){
                    if(result.code == 1){
                        _this.unablecode= true;
                        _this.common.showTip(result.msg);
                    }else{
                        _this.unablecode= false;
                        _this.common.showTip(result.msg);
                    }
                })
            }
        },
        // 组件命名不要与html标签冲突
        components: {'verfify-code': verfifyCode,'pwd-strength' : pwdStrength}
    }
</script>

<style scoped>
    .reg_tip{font-size: 0.78rem;padding-top: 1rem;}
    .reg_protocol{display:inline-block;font-size: 0.78rem;padding-top: .5rem;color: #4dd0c8;}
</style>
