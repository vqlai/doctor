<template>
    <div>
        <lt-head><p slot="title">家庭医生</p></lt-head>
        <div class="buy_top">
            <div class="img_box">
                <img src="../../assets/images/d_nopic.png">
            </div>
            <p class="info">张医生的家庭医生服务</p>
            <ul class="cbfix">
                <li v-for="(item, index) in fees" @click="choose(item,index)" :class="item.isOn">￥{{item.price}}元/{{item.period}}个月</li>
                <!-- <li :class="classObj">￥499元/1个月</li>
                <li :class="classObj">￥1199元/3个月</li>
                <li :class="classObj">￥2299元/6个月</li>
                <li :class="classObj">￥2299元/12个月</li> -->
            </ul>
        </div>
        <div class="buy_bottom">
            <h3>服务介绍</h3>
            <p> 家庭医生会为您的病情进行初步的判断，提供一些就诊建议。日常健康问题咨询：平时身体有些不适先电话咨询家庭医生，进行初步判断，能够自行调整的，不用白跑一趟去医院；需要去医院的，事先了解要做好哪些准备，避免盲目就医，减少反复奔波的辛苦。
            </p>
        </div>
        <div class="buy_opt">
            <span class="notice">￥{{select_price}}元/{{select_period}}个月</span><span class="purchase" @click="buy">购买</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fees:[{price:'499',period:'1',isOn:"on"},{price:'1199',period:'3',isOn:""},{price:'2299',period:'6',isOn:""},{price:'2299',period:'12',isOn:""}],
                select_price:'499',
                select_period: '1',
                doctor_id: ''
            }
        },
        mounted(){
            this.doctor_id = this.$route.query.id;
        },
        methods:{
            choose(item,index) {
               for(let i=0;i<this.fees.length;i++){
                this.fees[i].isOn="";
               }
               item.isOn = "on";
               this.select_price = item.price;
               this.select_period = item.period;
            },
            buy(){
                this.common.doAjax("UserPatient/buyMyDoctor",{
                    data:{
                        deal_seller: this.doctor_id,
                        deal_service_price: this.select_price,
                        deal_service_period: this.select_period
                    }
                }).done((result) => {
                    if(result.code == 1){
                        //注意区分路由器$router与路由$route
                        this.$router.push({ name: 'pay', query: {id: this.doctor_id,name: '家庭医生',price: this.select_price,period: this.select_period}})
                    }
                })
            }
        }
    }
</script>