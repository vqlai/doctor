<template>
    <div class="buy_record_list" :class="no_data">
        <lt-head><p slot="title">购买记录</p></lt-head>
        <ul>
            <!-- <li>
                <h3>图文咨询 <span>-80.00</span></h3>
                <p>2017-02-02  10:30</p>
            </li>
            <li>
                <h3>家庭医生-12个月 <span>-5000.00</span></h3>
                <p>2017-02-02  10:30</p>
            </li>
            <li>
                <h3>退款 <span class="on">+5000.00</span></h3>
                <p>2017-02-02  10:30</p>
            </li> -->
            <li v-for="item in items">
                <h3>{{item.service_name}} 
                    <span v-if="item.status=='1'" v-text="'-'+item.deal_service_price"></span>
                    <span v-else class="on" v-text="'+'+item.deal_service_price"></span>
                </h3>
                <p v-html="item.deal_add_time"></p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items: [],
                no_data: ''
            }
        },
        mounted(){
            // this.$el拿到当前组件的DOM
            // console.log(this.$el.querySelector(".top"));
            console.log(this.$children);
            this.common.doAjax("UserPatient/purchaseRecords",{
                data:{
                    page: '1',
                    size: '10'
                }
            }).done((result) => {
                if(result.code == 1){
                    this.items = result.list;
                    if(this.items.length === 0){
                        this.no_data = 'no_data_record';
                    }
                }
            })
        }
    }
</script>

<style scoped>
    .buy_record_list ul{background: #fff;padding: 0 1rem;}
    .buy_record_list ul li{padding: 1rem 0;border-bottom: 1px solid #dedede;}
    .buy_record_list ul li:last-child{border-bottom: none;}
    .buy_record_list ul li h3{font-weight: normal;font-size: 1.21rem;}
    .buy_record_list ul li span{float: right;color: #ff7272;}
    .buy_record_list ul li span.on{color: #75bbec;}
    .buy_record_list ul li p{color: #979797;font-size: 1rem;margin-top: .5rem;}
    .no_data_record{background: transparent!important;}
    .no_data_record:after{content: "暂无购买记录"; font-size: 1.2rem; color: #1d1e20; text-align: center; display: block; background: url(../../assets/images/no_buy_record.png) no-repeat center 0; background-size: 40% auto; padding: 50% 0 0; margin: 50% 0 0;}
</style>