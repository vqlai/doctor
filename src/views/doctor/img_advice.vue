<template>
    <div>
        <lt-head><p slot="title">图文咨询</p></lt-head>
        <div class="buy_top">
            <div class="img_box">
                <img src="../../assets/images/d_nopic.png">
            </div>
            <p class="info">张医生的图文咨询服务</p>
            <p class="price">￥{{select_price}}元/次</p>
        </div>
        <div class="buy_bottom">
            <h3>服务介绍</h3>
            <p> 家庭医生会为您的病情进行初步的判断，提供一些就诊建议。日常健康问题咨询：平时身体有些不适先电话咨询家庭医生，进行初步判断，能够自行调整的，不用白跑一趟去医院；需要去医院的，事先了解要做好哪些准备，避免盲目就医，减少反复奔波的辛苦。
            </p>
        </div>
        <!-- inline-block布局不能换行 -->
        <div class="buy_opt">
            <span class="notice">￥{{select_price}}元/次</span><span class="purchase" @click="buy">购买</span>
        </div>
    </div>
</template>

<script>
     export default {
        data(){
            return {
                select_price:'30',
                select_period: '1',
                doctor_id: ''
            }
        },
        mounted(){
            this.doctor_id = this.$route.query.id;
        },
        methods:{
            buy(){
                this.common.doAjax("UserPatient/buyImageText",{
                    data:{
                        deal_seller: this.doctor_id,
                        deal_service_price: this.select_price
                    }
                }).done((result) => {
                    if(result.code == 1){
                        //注意区分路由器$router与路由$route
                        this.$router.push({ name: 'pay', query: {id: this.doctor_id,name: '图文咨询',price: this.select_price,period: this.select_period}})
                    }
                })
            }
        }
    }
</script>