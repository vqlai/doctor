<template>
    <div>
        <lt-head><p slot="title">首页</p></lt-head>
        <download-app></download-app>
        <!-- <div class="banner"><img src="../../assets/images/banner.jpg" alt=""></div> -->
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img src="../../assets/images/banner.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../../assets/images/banner.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../../assets/images/banner.jpg" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
              </swiper>
        </div>
        <div class="find_doctor">
            <router-link  to="/doctor/search">找医生<!-- <p class="info">文案XXX（15个字内)</p> --></router-link >
        </div>
        <div class="list_panel" v-show="showDoctor">
            <div class="common_page_title">家庭医生 ({{doctorSize}})</div>
            <ul>
                <!-- <li v-for="item in doctorList" :key="item.id" class="cbfix" :data-id="item.deal_id" @click="goDoctor">
                    <div class="list_left">
                        <img src="../../assets/images/d_nopic.png">
                    </div>
                    <div class="list_right">
                        <h3>{{item.user_nick_name}}<span>{{item.doctor_job_title}}</span><span class="type1">{{item.doctor_depart}}</span></h3>
                        <p class="address">{{item.doctor_hospital}}</p>
                        <span v-show="item.remaining_days <1" class="off">已结束</span>
                    </div>
                </li> -->
                <router-link v-for="item in doctorList" :key="item.id" class="cbfix" :to="{name: 'doctor',query: {did: item.deal_id}}" tag="li">
                    <div class="list_left">
                        <img src="../../assets/images/d_nopic.png">
                    </div>
                    <div class="list_right">
                        <h3>{{item.user_nick_name}}<span>{{item.doctor_job_title}}</span><span class="type1">{{item.doctor_depart}}</span></h3>
                        <p class="address">{{item.doctor_hospital}}</p>
                        <span v-show="item.remaining_days <1" class="off">已结束</span>
                    </div>
                </router-link>
            </ul>
        </div>
        <div class="list_panel" v-show="showAdvice">
            <div class="common_page_title">图文咨询 ({{adviceSize}})</div>
            <ul>
                <!-- <li v-for="item in adviceList" :key="item.id" class="cbfix" :data-id="item.deal_id" @click="goDoctor">
                    <div class="list_left">
                        <img src="../../assets/images/d_nopic.png">
                    </div>
                    <div class="list_right">
                        <h3>{{item.user_nick_name}}<span>{{item.doctor_job_title}}</span><span class="type1">{{item.doctor_depart}}</span></h3>
                        <p class="address">{{item.doctor_hospital}}{{item.remaining_days}}</p>
                        <span v-show="item.remaining_days < 1" class="off">已结束</span>
                    </div>
                </li> -->
                <router-link v-for="item in adviceList" :key="item.id" class="cbfix" :to="{name: 'doctor',query: {did: item.deal_id}}" tag="li">
                    <div class="list_left">
                        <img src="../../assets/images/d_nopic.png">
                    </div>
                    <div class="list_right">
                        <h3>{{item.user_nick_name}}<span>{{item.doctor_job_title}}</span><span class="type1">{{item.doctor_depart}}</span></h3>
                        <p class="address">{{item.doctor_hospital}}{{item.remaining_days}}</p>
                        <span v-show="item.remaining_days < 1" class="off">已结束</span>
                    </div>
                </router-link>
            </ul>
        </div>
        <p class="kefu" v-show="!showDoctor && !showAdvice">客服热线  400-052-5887 </p>
    </div>
</template>

<script>
    import downloadApp from 'components/download_app.vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data: function(){
            return {
                showDoctor: false,
                showAdvice: false,
                doctorList: '',
                doctorSize: '',
                adviceList: '',
                adviceSize: '',
                swiperOption: {
                  // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                  notNextTick: true,
                  // swiper configs 所有的配置同swiper官方api配置
                  autoplay: 3000,
                  loop: true,
                  direction : 'horizontal',
                  grabCursor : true,
                  setWrapperSize :true,
                  autoHeight: true,
                  pagination : '.swiper-pagination',
                  paginationClickable :true,
                  // prevButton:'.swiper-button-prev',
                  // nextButton:'.swiper-button-next',
                  // scrollbar:'.swiper-scrollbar',
                  mousewheelControl : true,
                  observeParents:true,
                  // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                  debugger: true,
                  // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                  onTransitionStart(swiper){
                    // console.log(swiper)
                  }
                }
            }
        },
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
        mounted: function() {
            // 加载当前上下文内的swiper对象
            // this.swiper.slideTo(3, 1000, false);
            this.common.doAjax("UserPatient/myDoctorList",{
                data:{
                    page: 1,
                    size: 10
                }
            }).done((result) => {
                if(result.code == 1){
                    if(result.list.length>0){
                        this.showDoctor=true;
                    }else{
                        this.showDoctor=false;
                    }
                    this.doctorSize = result.list.length;
                    this.doctorList = result.list;
                }
            })
            this.common.doAjax("UserPatient/imageTextList",{
                data:{
                    page: 1,
                    size: 10
                }
            }).done((result) => {
                if(result.code == 1){
                    if(result.list.length>0){
                        this.showAdvice=true;
                    }else{
                        this.showAdvice=false;
                    }
                    this.adviceSize = result.list.length;
                    this.adviceList = result.list;
                }
            })
        },
        methods:{
            // goDoctor: function(event){
            //     //event.currentTarget获取到当前绑定事件的元素，event.target获取到当前被点击的元素，所获取的DOM元素，可以使用js的DOM方法
            //     let id = event.currentTarget.getAttribute("data-id");
            //     this.$router.push({name: 'doctor',query: {did: id}});
            // }
        },
        components:{'download-app': downloadApp,swiper,swiperSlide}
    }
</script>

<style scoped>
    .banner{background: #fff;margin: 0 auto;text-align: center;}
    .my_doctor{width: 100%;height:auto;background: #fff;margin-top: .4rem;border-bottom: 1px solid #dedede;}
    .find_doctor{background: #fff;margin-top: .66rem;padding: 0 1rem;}
    .find_doctor a{display:block;font-size: 1rem;color: #1d1e20;padding: 1.66rem 0 1.66rem 3rem;background: url(../../assets/images/search.png) no-repeat 0 50%;background-size: auto 48%;}
    .find_doctor .info{color: #979797;font-size: .8rem;}
    .list_panel ul{background: #fff;}
    .list_panel ul li{padding:1.2rem 0;margin: 0 1rem;border-bottom: 1px solid #f5f7fa;}
    .list_panel ul li .list_left{float:left;width: 4rem;height: 4rem;margin-right:1rem;position: relative;overflow: hidden;}
    .list_panel ul li .list_left img{display: block; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;}
    .list_panel ul li .list_right{float: left;width: 76%;position: relative;}
    .list_panel ul li h3{padding-bottom: 1rem;font-size: 1.208rem;font-weight: normal;}
    .list_panel ul li h3 span{border-radius: 1rem;margin: .1rem 1rem 0 1.5rem;padding: .1rem .6rem;color: #3fc389;border: 1px solid #3fc389;font-size: .86rem;vertical-align: top;display: inline-block;}
    .list_panel ul li h3 span:last-child{color: #75bbec;border: 1px solid #75bbec;margin: .1rem 0 0 0;}
    .list_panel ul li .address{padding-left:1.2rem;color: #393a3c;font-size: 0.86rem;background: url(../../assets/images/address.png) no-repeat 0 50%;background-size: auto 80%;}
    .list_panel .list_right > span{position:absolute;bottom:-1.16rem;right:-1rem;color: #3dc8c0;font-size: .85rem;}
    .list_panel .list_right > span.off{color: #ff4e6f;}
    .kefu{color: #979797;position: absolute;bottom: 4%;left:30%;}
</style>