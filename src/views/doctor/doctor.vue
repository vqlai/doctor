<template>
    <div class="doctor_page">
        <lt-head><p slot="title">医生主页</p></lt-head>
        <download-app></download-app>
        <!-- 医生正常服务 -->
        <div v-show="info.status == 1">
            <div class="doctor_intro cbfix">
                <div class="list_left">
                    <img src="../../assets/images/d_nopic.png">
                </div>
                <div class="list_right" v-if="info.doctor_info">
                    <h3>{{info.doctor_info.user_nick_name}}<span>{{info.doctor_info.doctor_job_title}}</span><span>{{info.doctor_info.doctor_depart}}</span></h3>
                    <p class="info">{{info.doctor_info.doctor_inquiry_num}}次接诊</p>
                    <p class="address">{{info.doctor_info.doctor_hospital}}</p>
                </div>
            </div>
            <router-link  class="doctor_opt cbfix" v-if="info.image_text_status == 0 && info.my_doctor_status == 0" tag="div" :to="{name: 'img_advice', query: { id: info.doctor_info.user_id}}">
                <div>
                    <h3>图文咨询</h3>
                    <p>通过文字、图片、语音进行咨询</p>
                </div>
                <div><span>{{Number(info.image_text_price)}}元/次</span></div>
            </router-link >
            <router-link class="doctor_opt home cbfix" v-if="info.my_doctor_status == 0" tag="div" :to="{name: 'home_doctor', query: { id: info.doctor_info.user_id}}">
                <div>
                    <h3>家庭医生</h3>
                    <p>不限次数的图文咨询、建立健康档案、日常健康检测等</p>
                </div>
                <div><span>{{Number(info.my_doctor_price)}}元/次</span></div>
            </router-link>
            <div class="doctor_item">
                <h3>患者评价<span v-if="info.doctor_info" class="rate_text">好评度 <span class="rate">{{Number(info.doctor_info.doctor_praise_rate)}}%</span></span></h3>
                <ul class="cbfix">
                    <li v-for="item in filter_remark" :key="item.id">
                        {{item.remark_val}} ({{item.count}})
                    </li>
                    <!-- <li>回复很及时(303)</li>
                    <li>态度非常好(134)</li>
                    <li>很敬业(38)</li>
                    <li>回复很及时(303)</li>
                    <li>意见很有帮助(303)</li>
                    <li>非常专业认真(303)</li> -->
                </ul>
            </div>
            <div class="doctor_item">
                <h3>专业擅长</h3>
                <p v-if="info.doctor_info">{{info.doctor_info.doctor_good_at}}</p>
            </div>
            <div class="doctor_item">
                <h3>服务时间</h3>
                <p v-if="info.doctor_info">{{info.doctor_info.doctor_service_time}}</p>
            </div>
            <div class="doctor_item" v-if="info.doctor_info">
                <h3>医生个人简历</h3>
                <div class="resume">
                    <h4>毕业院校</h4>
                    <p>{{info.doctor_info.doctor_finish_school}}</p>
                </div>
                <div class="resume">
                    <h4>履历及成就</h4>
                    <p>{{info.doctor_info.doctor_resume_achieve}}</p>
                </div>
                <div class="resume">
                    <h4>其他</h4>
                    <p>{{info.doctor_info.doctor_other}}</p>
                    <ol class="cbfix">
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                    </ol>
                </div>
            </div>
            <div v-if="info.image_text_status == 1 || info.my_doctor_status == 1">
                <div class="btn_blank"></div>
                <div class="bottom_btn" v-show="info.image_text_status == 1 && info.my_doctor_status == 0">立即咨询</div>
                <div class="bottom_btn" v-show="info.my_doctor_status == 1">立即咨询（剩余{{info.remaining_days}}天）</div>
            </div>
        </div>
        <!-- 已关闭服务的医生 -->
        <div class="no_service" v-show="info.status == 2">
            <img src="../../assets/images/no_service.png">
            <p>该医生已关闭服务，若有疑问请咨询</p>
            <p>440-258-9658</p>
            <a href="">拨打电话</a>
        </div>
    </div>
</template>

<script>
    import downloadApp from 'components/download_app.vue'
    export default {
        data: function(){
            return {
                info: {},
                remark: []
            }
        },
        mounted: function() {
            // console.log(this.$data);
            this.$nextTick(function(){
                this.common.doAjax("UserPatient/doctorHomepage",{
                    data:{
                        doctor_id: this.$route.query.did
                    }
                }).done((result) => {
                    if(result.code == 1){
                        this.info = result.extra.doctor_info;
                        this.remark = this.info.remark_info;
                    }
                })
                // this.$set(this.someObject,'b',2);
                // this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 });
            })
        },
        methods: {
           
        },
        computed: {
            filter_remark: function () {
                let data = {d1:'回复很及时',d2:'态度非常好',d3:'非常清楚',d4:'意见很有帮助',d5:'非常敬业',d6:'非常专业认真',d7:'希望讲得更透彻',d8:'希望回复更快',d9:'希望更热情',
                            d10:'希望更细致',d11:'完全听不懂',d12:'感觉不专业',d13:'没有帮助',d14:'等好久没回复',d15:'不细致',d16:'不友好'};
                for(let i=0;i < this.remark.length;i++){
                    this.remark[i].remark_val = data["d"+this.remark[i].remark_val];
                    // console.log(data["d"+this.remark[i].remark_val]);
                }
                return this.remark;
            }
        },
        components:{'download-app': downloadApp}
    }
</script>

<style scoped>
    .doctor_page{width: 100%;height: auto;}
    .doctor_intro{background: #34bab2;padding: 1.58rem 0;color: #fff}
    .doctor_intro .list_left{float:left;width: 4rem;height: 4rem;margin: 0 1rem;position: relative;overflow: hidden;}
    .doctor_intro .list_left img{display: block; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;}
    .doctor_intro .list_right{float: left;width: 74%;}
    .doctor_intro h3{padding-bottom: 1rem;font-size: 1.35rem;font-weight: normal;}
    .doctor_intro span{border-radius: 1rem;margin: .24rem 1rem 0 1.5rem;padding: .1rem .6rem;color: #3fc389;background: #fff;font-size: .86rem;vertical-align: top;display: inline-block;}
    .doctor_intro span:last-child{color: #75bbec;margin: .24rem 0 0 0;}
    .doctor_intro .info{padding-bottom: .8rem;font-size: 1rem;}
    .doctor_intro .address{padding-left:1.2rem;color: #fff;font-size: 0.86rem;background: url(../../assets/images/address2.png) no-repeat 0 50%;background-size: auto 80%;}
    .doctor_opt{margin-bottom: .5rem;background: #fff;padding: 0 1rem;box-sizing: border-box;}
    .doctor_opt > div{float: left;box-sizing: border-box;}
    .doctor_opt > div:first-child{width: 80%;padding: 1.5rem 0 1.5rem 3.5rem;background: url(../../assets/images/img_advice.png) no-repeat 0 50%;background-size: auto 46%;}
    .doctor_opt.home > div:first-child{padding: .834rem 0 .834rem 3.5rem;background-image: url(../../assets/images/home_doctor.png);}
    .doctor_opt > div:first-child h3{font-size: 1.2rem;color: #1d1e20;font-weight: normal;}
    .doctor_opt > div:first-child p{color: #979797;font-size: .92rem;}
    .doctor_opt > div:last-child{width: 20%;color: #ff5e5e;text-align: right;font-size: 1.2rem;padding: 2.16rem 0;}
    .doctor_item{margin-bottom: .5rem;background: #fff;padding: 0 1rem 2rem;color: #1d1e20;}
    .doctor_item h3{padding: 1rem 0;font-weight: normal;position: relative;}
    .doctor_item h3:before{content: " ";position: absolute;top: 1.3rem;left: -1rem;width: .5rem;height: 1.1rem;background: #3dc8c0;}
    .doctor_item h3 .rate_text{float: right;}
    .doctor_item h3 .rate{color: #ff5e5e;}
    .doctor_item ul li{float: left;margin: .5rem .4rem 0 0;padding:.5rem;border:1px solid #f7f7f7;color: #979797;font-size: .925rem;border-radius: .2rem;}
    .doctor_item p{font-size: .925rem;color: #979797;}
    .doctor_item:last-child{margin-bottom: 0;}
    .resume{padding-bottom: 1.5rem;border-bottom: 1px solid #f7f8f8;}
    .resume h4{padding: .5rem .5rem .5rem 1rem;font-weight: normal;font-size: 1rem;background: url(../../assets/images/summary.png) no-repeat 0 55%;background-size: auto 1rem;}
    .resume ol li{width: 48%;height: 10rem;float: left;border: 2px solid #f7f8f8;border-radius: .2rem;box-sizing: border-box;margin-top: 1rem;}
    /*css3倍数选择器odd为奇数，even为偶数*/
    .resume ol li:nth-child(odd){margin-right:4%;}
    .resume:last-child{border: none;padding-bottom: 0;}
    .no_service{text-align: center;}
    .no_service img{width: 30%;margin:0 auto;padding-top:30%;padding-bottom: 2rem;}
    .no_service p{padding-bottom: 1rem;color:#1d1e20;font-size: 1.21rem;}
    .no_service a{display: inline-block;padding: .6rem 2rem;background: #4dd0c8;color: #fff;border-radius: .2rem;margin-top: 2rem;}
</style>