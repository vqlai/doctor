<template>
    <div class="pay">
        <lt-head><p slot="title">支付</p></lt-head>
        <div class="pay_top">
            <p><span>名称</span>{{info.name}}{{info.period}}</p>
            <p><span>总额</span></p>
            <p class="price">￥{{info.price}}</p>
        </div>
        <div class="common_page_title">支付方式</div>
        <div class="pay_btm">
            <ul>
               <!--  <li class="on">支付宝</li>
                <li>微信支付</li>
                <li>银联支付</li> -->
                <li v-for="(item,index) in types" @click="choose(item,index)" :class="item.isOn">{{item.text}}</li>
            </ul>
        </div>
        <div class="page_btn" @click="comfirm_pay">确定支付</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                info: {},
                hd_period: '',
                types: [{text:'支付宝',isOn:"on"},{text:'微信支付',isOn:""},{text:'银联支付',isOn:""}]
            }
        },
        mounted() {
            this.$nextTick(function(){
                this.info = this.$route.query;
                if(this.info.name=="图文咨询"){
                    this.info.period = "-"+this.info.period+"次";
                }else{
                    this.hd_period = this.info.period;
                    this.info.period = "-"+this.info.period+"个月";
                }
            })
        },
        methods: {
            choose(item,index){
                for(let i=0;i<this.types.length;i++){
                    this.types[i].isOn="";
                }
                item.isOn = "on";
            },
            comfirm_pay(){
                // if(this.info.name=="图文咨询"){
                //     this.common.doAjax("UserPatient/buyImageText",{
                //         // data:{
                //         //     deal_seller: ,
                //         //     deal_service_price:
                //         // }
                //     }).done((result) => {
                //         if(result.code == 1){
                            
                //         }
                //     })
                // }else{
                //     this.common.doAjax("UserPatient/buyMyDoctor",{
                //         // data:{
                //         //     deal_seller: ,
                //         //     deal_service_price: ,
                //         //     deal_service_period:
                //         // }
                //     }).done((result) => {
                //         if(result.code == 1){
                            
                //         }
                //     })
                // }
            }
        }
    }
</script>
<style scoped>
    .pay .pay_top{padding: 1rem;background: #fff;font-size: 1.2rem;}
    .pay .pay_top span{color: #979797;padding-right: 1.5rem;}
    .pay .pay_top p:nth-child(2){padding-top: 1rem;}
    .pay .pay_top p:last-child{font-size:2.1325rem;color: #ff5e5e;margin-left: -.5rem;}
    .pay .pay_btm{background: #fff;font-size: 1.2rem;padding: 0 1rem;margin-bottom: 3rem;}
    .pay .pay_btm ul li{padding: 1.33rem 0 1.33rem 3rem;border-bottom: 1px solid #dedede;position: relative;}
    .pay .pay_btm ul li:nth-child(1){background: url(../../assets/images/ali_pay.png) no-repeat 0 58%;background-size: auto 50%;}
    .pay .pay_btm ul li:nth-child(2){background: url(../../assets/images/wx_pay.png) no-repeat 0 58%;background-size: auto 50%;}
    .pay .pay_btm ul li:nth-child(3){background: url(../../assets/images/bank_pay.png) no-repeat 0 58%;background-size: auto 40%;border: none;}
    /*after/before一定要设置content属性，否则无效*/
    .pay .pay_btm ul li.on:before{position: absolute;top:1.6rem;right:0;content:" ";width: 1.2rem;height: 1rem;background: url(../../assets/images/pay_on.png) no-repeat;background-size: 100% auto;}
</style>