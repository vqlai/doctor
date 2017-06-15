<template>
    <diV class="chat_list">
        <lt-head><p slot="title">张三医生</p></lt-head>
        <div class="service_tip">本次服务在xx小时xx分钟后自动关闭</div>
        <ul>
            <li>
                <div class="time"><span>3/6/17 12:30</span></div>
                <div class="content cbfix">
                    <div class="c_left">
                        <img src="../../assets/images/chat_system.png">
                    </div>
                    <div class="c_right">
                        <span>系统消息</span>
                        <p class="arrow_left">引导用户先描述症状提问,  5分钟后，医生如未回复将 退钱至您账户，请与医生描 述您的病情，并留下聊天记 录。</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="content rg cbfix">
                    <div class="c_left">
                        <img src="../../assets/images/chat_patient.png">
                    </div>
                    <div class="c_right">
                        <span>李小姐</span>
                        <p class="arrow_right">有去医院检查吗？或者你可 以拍照给我看看！ </p>
                    </div>
                </div>
            </li>
            <li>
                <div class="time"><span>3/6/17 12:30</span></div>
                <div class="content cbfix">
                    <div class="c_left">
                        <img src="../../assets/images/chat_doctor.png">
                    </div>
                    <div class="c_right">
                        <span>张医生</span>
                        <p class="arrow_left">有去医院检查吗？或者你可以拍照给我看看！ </p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="chat_blank"></div>
        <div class="chat_btm">
           <!--  <div class="tip">
                <h3>提示</h3>
                <p>XX医生发起结束本次咨询，若您无疑问，您可 结束并评价XX医生【需要文案】</p>
                <h3>服务已结束</h3>
                <p>本次咨询已结束，给医生服务评价</p>
            </div> -->
            <div class="opt opt3">
                <!-- <button>还要咨询</button>
                <button>确定结束</button> -->
                <!-- <button>马上评价</button> -->

                <!-- <span>本次服务已结束</span>
                <button>再次购买</button>  -->
                
                <a href="javascript:"></a>
                <textarea  rows="1" maxlength="500"></textarea>
                <button>发送</button>
            </div>
        </div>
    </diV>
</template>

<script></script>

<style scoped>
    .chat_list{position: relative;}
    .chat_list ul li{margin: 0 1rem;}
    .chat_list .content{padding-top: 1rem;}
    .chat_list .service_tip{padding: 1rem;background: #34bab2;color: #fff;font-size: 1.208rem;}
    .chat_list .time{text-align: center;padding-top: 1rem;}
    .chat_list .time span{display:inline-block;color: #fff;background: #cecece;padding: .2rem .5rem;border-radius: .2rem;}
    .chat_list .c_left{width: 3.08rem;height: 3.08rem;float: left;margin-right: 1rem;}
    .chat_list .c_right{float: left;max-width: 67%;}
    .chat_list .c_right span{font-size: 1rem;color: #979797;}
    .chat_list .c_right p{background: #fff;font-size: 1.208rem;padding: 1rem;margin-top: .5rem;border: 1px solid #cecece;border-radius: .4rem;line-height: 1.7rem;word-break:break-all;position: relative;}
    .chat_list .c_right .arrow_left:before{ content: ' ';background: url(../../assets/images/chat_triangle1.png) no-repeat;background-size: 100% auto;width: 0.8rem;height: 1.2rem;position: absolute;top: 0;left: -.8rem;margin-top: .5rem;} 

    .chat_list .rg .c_left{float: right;margin-left: 1rem;margin-right: 0;}
    .chat_list .rg .c_right{float: right;text-align: right;}
    .chat_list .rg .c_right p{text-align: left;background: #c2e4ff;border: none;}
    /*.chat_list .c_right .arrow_right:after{ content: ' '; height: 0; width: 0; position: absolute;left:100%;top:10%;border-top: .5rem solid transparent; border-bottom: .5rem solid transparent; border-left: 1rem solid #c2e4ff;} */
    .chat_list .rg .c_right .arrow_right:after{ content: ' ';background: url(../../assets/images/chat_triangle2.png) no-repeat;background-size: 100% auto;width: 0.8rem;height: 1.2rem;position: absolute;top: 0;right: -.8rem;margin-top: .5rem;} 


    .chat_list .chat_btm{position: fixed;left: 0;bottom: 0;width: 100%;height: auto;z-index: 10;
        /*display: -webkit-box; display: -ms-flexbox; display: flex;*/}
    .chat_list .chat_blank{width: 100%;height: 8rem;}
    .chat_list .chat_btm .tip{background: #fff;padding: .5rem 1rem;border-top:1px solid #cecece;}
    .chat_list .chat_btm .tip h3{font-size: 1.208rem;font-weight: normal;margin-bottom: .2rem;}
    .chat_list .chat_btm .tip p{color: #979797;font-size: 1.208rem;line-height: 1.8rem;}

    .chat_list .chat_btm .opt{padding: 0 1rem;background: #eaecf1;}
    .chat_list .chat_btm .opt1 button{border:1px solid #cecece;background: #fff;padding: .4rem 1.6rem;margin: .6rem 0;border-radius: .4rem;}
    .chat_list .chat_btm .opt1 button:first-child{margin-right: 2rem;}
    .chat_list .chat_btm .opt1{text-align: center;}
    .chat_list .chat_btm .opt2{text-align: left;border-top:1px solid #cecece;}
    .chat_list .chat_btm .opt2 span{display:inline-block;width:60%;font-size: 1.208rem;text-align: left;}
    .chat_list .chat_btm .opt3 a{display:inline-block;vertical-align: middle;width: 2.2rem;height: 2.2rem;border:1px solid #cecece;border-radius:1.2rem;background: url(../../assets/images/chat_pic.png) no-repeat center;background-size: 70%;}
    .chat_list .chat_btm .opt3 textarea{display:inline-block;vertical-align: middle;margin: .6rem 1rem;/*min-height:2.66rem;*/width:59%;border: 1px solid #cecece;border-radius: .4rem;resize: none;font-size:1.208rem;padding: .5rem 0;/*-webkit-box-flex: 1; -ms-flex: 1; flex: 1;*/} 
    .chat_list .chat_btm .opt3 button{display:inline-block;vertical-align: middle;background: #83b6fe;color: #fff;border: 1px solid #83b6fe;padding: .5rem 1.2rem;border-radius: .2rem;font-size:1.208rem;}
</style>