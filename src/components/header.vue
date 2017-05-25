<template>
	<header class="header">
		<div class="top" :class="{transparent:isTransparent}">
			<div @click="goBack" class="back button" :class="leftButtonClass">
				<i v-if="!isDisableGoBack" class="iconfont icon-fanhui"></i><span v-if="isTransparent">返回</span>
				<slot name="left"></slot>
			</div>
			<p class="title"><slot name="title"></slot></p>
			<div class="right button" :class="rightButtonClass" @click="clickRight"><slot name="right"></slot></div>
		</div>
		<div class="blank" v-if="!isTransparent"></div>
	</header>
</template>
<script>
	export default {
		 props: ['isTransparent',"rightButtonClass","isDisableGoBack","leftButtonClass"],
		 methods:{
		 	goBack(){
		 		if(!this.isDisableGoBack){
		 			this.$router.go(-1);
		 		}
		 		this.$emit('click-left');
		 	},
		 	clickRight(){
		 		this.$emit('click-right');
		 	}
		 }
    }
</script>
<style>
	 @import url('../assets/iconfont/iconfont.css');
</style>
