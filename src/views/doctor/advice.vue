<template>
    <ol class="device_list">
        <li class="cbfix">
            <div class="d_left">
                <img src="../../assets/images/d_nopic.png">
            </div>
            <span class="amount">11</span>
            <div class="d_right">
                <p class="name">张三 <span class="time">今天</span></p>
                <p class="message">这里显示这类消息，最近的一次消息文本内容...</p>
            </div>
        </li>
        <li class="cbfix">
            <div class="d_left">
                <img src="../../assets/images/d_nopic.png">
            </div>
            <span class="amount">11</span>
            <div class="d_right">
                <p class="name">张三 <span class="time">今天</span></p>
                <p class="message">这里显示这类消息，最近的一次消息文本内容...</p>
            </div>
        </li>
        <li class="cbfix">
            <div class="d_left">
                <img src="../../assets/images/d_nopic.png">
            </div>
            <span class="amount">11</span>
            <div class="d_right">
                <p class="name">张三 <span class="time">今天</span></p>
                <p class="message">这里显示这类消息，最近的一次消息文本内容...</p>
            </div>
        </li>
    </ol>
</template>

<script>
    
</script>

<style scoped>
    ol.device_list{background: #fff;border-bottom: 1px solid #dedede;}
    ol.device_list li{border-bottom: 1px solid #dedede;margin-left: 4%;padding: 4% 4% 4% 0;position: relative;}
    ol.device_list li:last-child{border: none;}
    ol.device_list .d_left{float:left;width: 16%;max-height: 4rem;margin-right:4%;vertical-align: middle;position: relative;overflow: hidden;}
    ol.device_list span.amount{position: absolute;top: .4rem;left: 13%;background: #f24747;color: #fff;font-size: .78rem;border-radius: .8rem; padding: 0 .1rem;} 
    ol.device_list .d_right{float:left;width: 80%;height: auto;vertical-align: middle;text-align: left;}
    ol.device_list .name{font-size:1.2rem;color: #1d1e20;margin-bottom: .4rem;}
    ol.device_list .time{float:right;font-size:.85rem;color:#979797;}
    ol.device_list .message{width:90%;font-size:.85rem;color:#979797;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
</style>