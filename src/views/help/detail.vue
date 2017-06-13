<template>
    <div>
        <lt-head><p slot="title">帮助详情</p></lt-head>
        <div class="help_detail">
            <h3>{{content.article_id}}、{{content.article_title}}<span v-if="content.article_publish_time">{{ Number(content.article_publish_time) | dateFormat('yyyy-MM-dd') }}</span></h3>
            <p>{{content.article_content}}</p>
        </div>
    </div>
</template>

<script>
	export default {
        data: function(){
            return {
            	content: ''
            }
        },
        mounted: function() {
        	this.$nextTick(function(){
                let id = this.$route.query.did;
                this.common.doAjax("UserPatient/patientHelpInfo",{
                    data:{article_id: id}
                }).done((result) => {
                    if(result.code == 1){
                        this.content = result.extra.Info;
                        // this.common.dateFormat(new Date(result.extra.Info.article_publish_time*1000),"yyyy.MM.dd");
                    }
                })
        		// this.content = JSON.parse(sessionStorage.articleItem);
        	})
        }
    }
</script><style scoped>
	.help_detail{background: #fff;padding: 1rem;}
	.help_detail h3{color: #393a3c;font-size: 1.208rem;font-weight: normal;position: relative;}
	.help_detail span{position: absolute;top: 50%;right:0;transform: translateY(-50%);color: #979797;font-size: .924rem;}
	/*word-break:break-all让文本一行内尽量多的显示*/
	.help_detail p{padding:1rem 0;color:#979797;word-break:break-all;font-size: .924rem;line-height: 1.6rem;}
</style>