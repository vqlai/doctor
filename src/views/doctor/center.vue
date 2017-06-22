<template>
    <div class="user_center">
        <lt-head><p slot="title">我的中心</p></lt-head>
        <div class="user_info cbfix">
            <div>
                <img src="../../assets/images/d_nopic.png">
            </div>
            <div v-if="islogin">
                <h3>张三</h3>
                <p class="phone">135XXXXX985</p>
            </div>
            <div v-else>
                <!-- 直接通过router-link操作url to的参数为字符串无需加:,如果是对象，需要加:-->
                <router-link to="/user/login">登录/注册</router-link>
            </div>
        </div>
        <div class="buy_record_link">
            <!-- <a href="buy_record.html">购买记录</a> -->
            <router-link  to="record">购买记录</router-link>
        </div>
        <ul>
            <li>
                客服热线
                <div class="service">
                    <p>400-985-8569</p>
                    <small>服务时间：工作日9:00 - 18:00</small>
                </div>
            </li>
            <li>下载APP</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               islogin: false
            }
        },
        mounted() {
            this.$nextTick(function(){
                if(this.common.getCookie('token')){
                    this.islogin = true;
                }else{
                    this.islogin = false;
                }
            })
        }
    }
</script>

<style scoped>
    .user_center{width: 100%;height: auto;}
    .user_info{background: #34bcb4;padding: 1rem;color: #fff;}
    .user_info >div:first-child{float:left;width: 4rem;height: 4rem;margin-right:1rem;position: relative;overflow: hidden;}
    .user_info >div:first-child img{display: block; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;}
    .user_info >div:last-child{float: left;width: 79.6%;background: url(../../assets/images/arrow2.png) no-repeat right center;background-size: auto 40%;}
    .user_info >div:last-child h3{font-weight: normal;padding: .3rem 0;font-size: 1.208rem;}
    .user_info >div:last-child a{display:block;font-weight: normal;padding: 1.14rem 0;font-size: 1.208rem;color: #fff;}
    .user_info >div:last-child p{padding-left: 1rem;background: url(../../assets/images/phone.png) no-repeat left center;background-size: auto 80%;font-size: .92rem;}
    .buy_record_link{padding: 1.33rem 1rem;margin: .66rem 0;background: url(../../assets/images/arrow.png) no-repeat right 1rem center #fff;background-size: auto 30%;}
    .buy_record_link a{display: block;padding-left: 2rem;background: url(../../assets/images/buy_record.png) no-repeat left center;background-size: auto 100%;color: #1d1e20;font-size: 1.208rem;}
    .user_center ul{background: #fff;padding: 0 1rem;}
    .user_center ul li{padding: 1.33rem 0;font-size: 1.208rem;border-bottom: 1px solid #f5f7fa;position: relative;}
    .user_center .service{position: absolute;top: .6rem;right: 0;text-align: right;color: #979797;font-size: 1.208rem;}
</style>