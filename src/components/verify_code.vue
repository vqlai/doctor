<template>
	<div class="verify_code_box">
        <input type="text" placeholder="请输入验证码" maxlength="4" class="common_input" v-model.trim="code"  v-on:input="getCurCode($event.target.value)">
        <button :class="status" @click="getCode">{{text}}</button>
        <!-- <slot></slot> -->
    </div> 
</template>

<script>
	import register from 'src/libs/registerHelp.js'
	export default {
        name: 'code',
        data: function() {
            return {
                code: '',
                //按钮状态，默认是可点击
                status: '',
                text: ''
            }
        },
        props: {
		    verifyPhone: String,
            unablebtn: Boolean
		},
        mounted: function() {
        	this.$nextTick(function(){
        	})
        },
        // 监听数据模型变化
        watch: {
            unablebtn: function (val) {
            	if(val === true){
            		this.runcode();
            	}
            }
        },
        methods: {
           	getCode: function () {
                // console.log(this.verifyPhone);
           		if(this.status == 'disable') return;
           		if(register.checkPhone(this.verifyPhone)){
                    //使用$emit将事件挂载出去，父组件才可以监听到
                    this.$emit('getCode');	
                    if(this.status == '' && this.unablebtn == true){
                        this.runcode();
                    }
           		}
		    },
		    getCurCode: function(value){
			    // 通过 input 事件发出数值
	      		this.$emit('input', (value))
		    },
            runcode(){
                this.status='disable';
                let time = 60;
                this.text = time + '秒后重获';
                const _this = this;
                let interval = setInterval(function(){
                    time --;
                    if(time<10){
                        _this.text = "0"+time + '秒后重获';
                    }else{
                        _this.text = time + '秒后重获';
                    }
                    if(time == 0){
                        clearInterval(interval);
                        _this.status='';
                        _this.text='';
                    }
                },1000); 
            }
        }
    }
</script>

<style scoped>
	.verify_code_box{position: relative;}
	.verify_code_box button{position: absolute;top:0;right: .2rem;margin-top:1.48rem;font-size: 1rem;padding: .4rem .4rem;border-radius: 4px;background: #83b6fe;color: #fff;border: none;}
	.verify_code_box button:after{content:"获取验证码";}
	.verify_code_box button.disable{background: #cccccc;}
	.verify_code_box button.disable:after{content:"";}
</style>