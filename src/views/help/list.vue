<template>
    <div>
        <lt-head><p slot="title">帮助中心</p></lt-head>
        <ul class="help_list">
            <!-- <li>1、提现多少天能到账</li>
            <li>2、如何开通家庭医生服务？</li>
            <li>3、认证通过后，如果更换医院，怎样修改？</li> -->
            <!-- 通过事件操作DOM去跳转url -->
            <!-- <li v-for="item in articleList" :key="item.id" @click="goDetail" :data-id="item.article_id" >
            	{{item.article_id}}、{{item.article_title}}
            </li> -->
            <!-- 直接通过router-link操作url to的参数为字符串无需加:,如果是对象，需要加:-->
            <router-link v-for="item in articleList" :key="item.id" :to="{ name: 'help_detail', query: { did: item.article_id }}" tag="li">
                {{item.article_id}}、{{item.article_title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
	export default {
        data: function(){
            return {
            	articleList: []
            }
        },
        mounted: function() {
            this.common.doAjax("UserPatient/patientHelpCenter").done((result) => {
                if(result.code == 1){
               		this.articleList = result.list;
                }
            })
            // console.log(this.$router.currentRoute);
            // console.log(this.$router.mode);
            // console.log(this.$router.app);
        },
        methods:{
            // goDetail: function(event){
            // 	event.preventDefault();
            //     //获取到DOM对象
            //     let target = event.target;
            //     //获取到对应li的data-id
            //     let id = target.getAttribute("data-id");
            //     // sessionStorage.articleItem = JSON.stringify(this.articleList[index]);
            //     //带参数的跳转
            // 	this.$router.push({name: 'help_detail',query: {did: id}}); 
            //     // this.$router.go(-1);
            // 	// this.$router.replace({name: 'helpDetail'}); 
            // }
        }
    }
</script>

<style scoped>
	ul.help_list{padding: 0 1rem;background: #fff;color: #1d1e20;font-size: 1.208rem;border-bottom: 1px solid #dedede;}
	ul.help_list li{padding: 1rem 0;background: url(../../assets/images/arrow.png) no-repeat center right;background-size: auto 30%;border-bottom: 1px solid #dedede;}
	ul.help_list li:last-child{border-bottom: none;}
</style>