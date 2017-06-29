<template>
    <div class="doctor_list">
        <lt-head><p slot="title">医生总览</p></lt-head>
        <ul>
            <li v-for="item in list" :key="item.id" class="cbfix" @click="goDoctor" :data-id="item.user_id">
                <div class="list_left">
                    <img src="../../assets/images/d_nopic.png">
                </div>
                <div class="list_right">
                     <h3>{{item.user_nick_name}}<span>{{item.doctor_job_title}}</span><span class="type1">{{item.doctor_depart}}</span></h3>
                    <p class="address">{{item.doctor_hospital}}</p>
                    <p class="price">￥{{item.doctor_show_price}}起</p>
                    <p class="skill">擅长：{{item.doctor_good_at}}</p>
                </div>
            </li>
            <!-- <li class="cbfix">
                <div class="list_left">
                    <img src="../../assets/images/doctor1.jpg">
                </div>
                <div class="list_right">
                    <h3>张医生<span>主治医生</span><span class="type1">神经内科</span></h3>
                    <p class="address">上海交通大学医学院附属仁济医院</p>
                    <p class="price">￥80起</p>
                    <p class="skill">擅长：高血压、动脉粥样硬化、高血脂、冠心病...</p>
                </div>
            </li>
             <li class="cbfix">
                <div class="list_left">
                    <img src="../../assets/images/doctor1.jpg">
                </div>
                <div class="list_right">
                    <h3>张医生 <span>主治医生</span><span class="type1">神经内科</span></h3>
                    <p class="address">上海交通大学医学院附属仁济医院</p>
                    <p class="price">￥80起</p>
                    <p class="skill">擅长：高血压、动脉粥样硬化、高血脂、冠心病...</p>
                </div>
            </li> -->
        </ul>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                list: '',
                showList: false
            }
        },
        mounted: function() {
            this.common.doAjax("User/findDoctor",{
                data:{
                    page: 1,
                    size: 100
                }
            }).done((result) => {
                if(result.code == 1){
                    if(result.list.length>0){
                        this.showList=true;
                        this.list = result.list;
                    }else{
                        this.showList=false;
                    }
                }
            })
        },
        methods:{
            goDoctor: function(event){
                //event.currentTarget获取到当前绑定事件的元素，event.target获取到当前被点击的元素，所获取的DOM元素，可以使用js的DOM方法
                let id = event.currentTarget.getAttribute("data-id");
                this.$router.push({name: 'doctor',query: {did: id}});
            }
        }
    }
</script>

<style scoped>
    .doctor_list ul{border-top: 1px solid #dedede;}
    .doctor_list ul li{padding:1rem 0 0;margin-bottom: .5rem;background: #fff;}
    .doctor_list ul li .list_left{float:left;width: 4rem;height: 4rem;margin: 0 1rem;position: relative;overflow: hidden;}
    .doctor_list ul li .list_left img{display: block; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;}
    .doctor_list ul li .list_right{float: left;width: 76%;}
    .doctor_list ul li h3{padding-bottom: 1rem;font-size: 1.208rem;font-weight: normal;}
    .doctor_list ul li span{border-radius: 1rem;margin: 0 1rem 0 1.5rem;padding: 0 .6rem;color: #3fc389;border: 1px solid #3fc389;}
    .doctor_list ul li span:last-child{color: #75bbec;border: 1px solid #75bbec;margin: 0;}
    .doctor_list ul li .address{padding-left:1.2rem;color: #393a3c;font-size: 0.86rem;background: url(../../assets/images/address.png) no-repeat 0 50%;background-size: auto 80%;}
    .doctor_list ul li .price{padding:.8rem 0;font-size:1.35rem;color: #ff7272;}
    .doctor_list ul li .skill{padding:.6rem 0;font-size:0.86rem;color:#979797;border-top:1px solid #f0f0f0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
</style>