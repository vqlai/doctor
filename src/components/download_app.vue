<template>
	<div class="download">
        <span>更多服务请安装APP</span> <a href="javascript:;">下载APP</a>
    </div> 
</template>

<script>
    export default {
    }
</script>

<style scoped>
	.download{padding: .5rem 1.16rem;background: rgba(0,0,0,.6);font-size: 1rem;position: relative;color: #fff;}
    .download span{display: inline-block;padding:.5rem 0 .5rem 2rem;background: url(../assets/images/ali_pay.png) no-repeat left center;background-size: 16%;}
    .download a{color: #fff;background: #83b6fe;padding: .5rem;position: absolute;top: .5rem;right: 1rem;z-index: 6;border-radius: .2rem;}
</style>