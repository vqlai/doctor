<template>
    <div class="evaluation">
        <lt-head @click-right="submit"><p slot="title">评价</p><p slot="right">提交</p></lt-head>
        <div class="evaluation_top">
            <div class="doctor_info cbfix">
                <div class="img_left">
                    <img src="../../assets/images/d_nopic.png">
                </div>
                <div class="info_right">
                    <h3>张医生<span>主治医生</span><span>神经内科</span></h3>
                    <p class="info">专业擅长介绍Lorem ipsum dolor sit amet,..</p>
                </div>
            </div>
            <div class="doctor_evaluation">
                <ol>
                    <!-- <li class="on">很满意</li>
                    <li>满意</li>
                    <li>不满意</li> -->
                    <li v-for="(item,index) in types" :class="item.isOn" @click="change(item,index)">
                        {{item.text}}
                    </li>
                </ol>
                <ul class="cbfix">
                    <!-- <li class="on">回复很及时</li>
                    <li>态度非常好</li>
                    <li>非常清楚</li>
                    <li>意见很有帮助</li>
                    <li>非常敬业</li>
                    <li>非常专业认真</li> -->
                    <li v-for="item in remarks" :class="item.isOn" @click="choose(item)">
                        {{item.text}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="common_page_title">给医生评价</div>
        <div class="evaluation_btm"><textarea :placeholder="tip" v-model.trim="suggestion" maxlength="200"></textarea></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                types: [{index: 1,text:"很满意",isOn:"on"},{index: 2,text:"满意",isOn:""},{index: 3,text:"不满意",isOn:""}],
                perfects: [{index: 1,text:"回复很及时",isOn:""},{index: 2,text:"态度非常好",isOn:""},{index: 3,text:"非常清楚",isOn:""},{index: 4,text:"意见很有帮助",isOn:""},
                            {index: 5,text:"非常敬业",isOn:""},{index: 6,text:"非常专业认真",isOn:""}],
                goods: [{index: 7,text:"希望讲得更透彻",isOn:""},{index: 8,text:"希望回复更快",isOn:""},{index: 9,text:"希望更热情",isOn:""},{index: 10,text:"希望更细致",isOn:""}],
                bads: [{index: 11,text:"完全听不懂",isOn:""},{index: 12,text:"感觉不专业",isOn:""},{index: 13,text:"没有帮助",isOn:""},{index: 14,text:"等好久没回复",isOn:""},
                        {index: 15,text:"不细致",isOn:""},{index: 16,text:"不友好",isOn:""}],
                remarks:[],
                suggestion: '',
                tip: '欢迎提出更多建议或意见'
            }
        },
        mounted(){
            this.remarks = this.perfects;
        },
        methods:{
            change(item,index){
                for(let i=0;i<this.types.length;i++){
                this.types[i].isOn="";
               }
               switch(index){
                    case 0:
                        this.remarks = this.perfects;
                        this.tip = '欢迎提出更多建议或意见';
                        break;
                    case 1:
                        this.remarks = this.goods;
                        this.tip = '欢迎提出更多建议或意见';
                        break;
                    case 2:
                        this.remarks = this.bads;
                        this.tip = "请输入评价，方便我们根据您的评价对医生进行排查"
                        break;
               }
               item.isOn = "on";
            },
            choose(item){
                if(item.isOn == "on"){
                    item.isOn = "";
                }else{
                    item.isOn = "on";
                }
            },
            submit(){
                if(this.suggestion.length == ""){
                    this.common.showTip("请输入给医生的评价");
                    return;
                }
                let type = "";
                let remark =[];
                //map遍历对象
                this.types.map(function (obj) { 
                    if(obj.isOn == "on"){
                        type = obj.index;
                    }
                })
                for(let i=0;i<this.remarks.length;i++){
                    if(this.remarks[i].isOn == "on"){
                        remark.push(this.remarks[i].index);
                    }
                }
                console.log(type);
                console.log(remark);
                //remark.join(",")将数组转为字符串
                this.common.doAjax("UserPatient/patientsEvaluate",{
                    data:{
                        deal_id: "1",
                        remark_mark: type,
                        remark_val: remark.join(","),
                        remark_content: this.suggestion,
                        client: 1
                    }
                }).done((result) => {
                    if(result.code == 1){
                        //注意区分路由器$router与路由$route
                        // this.$router.push({ name: 'pay', query: {id: this.doctor_id,name: '家庭医生',price: this.select_price,period: this.select_period}})
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .evaluation .evaluation_top{padding: 0 1rem;background: #fff;font-size: 1.2rem;border-bottom: 1px solid #dedede;}
    .evaluation .doctor_info{padding: 1rem 0;border-bottom: 1px solid #dedede;}
    .evaluation .img_left{float:left;width: 4rem;height: 4rem;margin-right: 1rem;position: relative;overflow: hidden;}
    .evaluation .img_left img{display: block; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;}
    .evaluation .info_right{float: left;width: 78%;}
    .evaluation .info_right h3{padding-bottom: 1rem;font-size: 1.208rem;font-weight: normal;}
    .evaluation .info_right h3 span{border-radius: 1rem;margin-right: 1rem;padding: 0 .6rem;color: #3fc389;background: #fff;margin-left: 1.5rem;border: 1px solid #3fc389;}
    .evaluation .info_right h3 span:last-child{color: #75bbec;margin-left: 0;border: 1px solid #75bbec;}
    .evaluation .info_right .info{font-size: 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .evaluation .doctor_evaluation ol{display: -webkit-flex;display:-webkit-box;display: flex;flex-direction: row;flex-wrap: nowrap;padding: 1.34rem 0;}
    .evaluation .doctor_evaluation ol li{-webkit-flex: 1;-webkit-box-flex: 1;flex: 1;text-align: center;padding-top: 2rem;background: url(../../assets/images/s_off.png) no-repeat center 0;background-size: 20% auto;}
    .evaluation .doctor_evaluation ol li.on{background-image: url(../../assets/images/s_on.png);}
    .evaluation .doctor_evaluation ul {padding-bottom: 2rem;}
    .evaluation .doctor_evaluation ul li{float: left;padding: .5rem .5rem;border: 1px solid #dedede;margin: .5rem .4rem 0 0;border-radius: .2rem;}
    .evaluation .doctor_evaluation ul li.on{color: #3dc8c0;border: 1px solid #3dc8c0;}
    .evaluation .evaluation_btm{background: #fff;padding: 1rem;}
    /*resize禁用textarea拖动,max-width/max-height固定textarea宽度和高度*/
    .evaluation .evaluation_btm textarea{display: block;border: none;width: 100%;height: 14rem;max-height: 14rem;resize: none;}
</style>