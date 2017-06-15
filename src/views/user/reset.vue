<template>
    <div>
        <lt-head is-transparent="true"></lt-head>
    
        <div class="pre_container">
            <h3 class="common_tlt">重置密码</h3>
            <pwdStrength v-model="password"></pwdStrength>
            <a href="javascript:" class='common_btn on' @click='finish'>完成</a>
        </div>
    </div>
</template>
<script>
    import register from 'src/libs/registerHelp.js'
    import md5 from 'src/libs/md5.js'
    import pwdStrength from 'components/password_strength.vue'

    export default {
        name: 'reset',
        data: function() {
            return {
                password: ''
            }
        },
        mounted: function() {},
        methods: {
           finish: function(){
                if(register.checkPassword(this.password)){
                    this.common.doAjax("User/resetPwd",{
                        data:{
                            user_phone: this.$route.params.phone,
                            user_pwd: md5.hex_md5(this.password)
                        }
                    }).done((result)=>{
                        if(result.code == 1){
                            this.common.showTip(result.msg);
                            setTimeout(()=>{
                                this.$router.push('login');
                            },1000)
                        }else{
                            this.common.showTip(result.msg);
                        }
                    })
                }
           }
        },
        // 组件命名不要与html标签冲突
        components: {'pwdStrength':pwdStrength}
    }
</script>

<style scoped></style>