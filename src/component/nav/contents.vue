<template>
	<main>
		<span>{{msg.title}}</span>
		<p class="back" @click="back()">&lt;</p>
		<div class="content">
			<span v-if="msg.top" class="top">置顶</span>
			<span v-else-if="msg.tab=='share'" class="other">分享</span>
			<span v-else-if="msg.tab=='job'" class="other">招聘</span>
			<span v-else-if="msg.tab=='week'" class="other">week</span>
			<span v-else-if="msg.tab=='good'" class="other">精华</span>
			<span v-else class="other">问答</span>
			<span class="title">{{msg.title}}</span>
		</div>
		<div class="author">
			<img :src="msg.author.avatar_url" alt="" />
			&nbsp;&nbsp;&nbsp;&nbsp;<span>作者:</span><span>{{msg.author.loginname}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<span>发表时间:</span><span>{{msg.create_at | formatDate}}</span>
			<br />
			&nbsp;&nbsp;&nbsp;&nbsp;<span style="margin-left: 50px;margin-top: -80px;">最后回复时间:</span><span>{{msg.last_reply_at | formatDate}}</span>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>浏览量:</span><span>{{msg.visit_count}}</span>
			
		</div>
		
		<div v-html="msg.content" class="text"></div>
	</main>
</template>

<script>
	export default {
		data(){
			return {
				msg:''
			}
		},
	   mounted(){
	      this.msg = this.$route.params.id
	      this.$http.get('https://www.vue-js.com/api/v1/topic/'+this.$route.params.id).then(function(res){
	      		this.msg = res.body.data
			})
	  	},
	  	methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	main{
		height: 100%;
		width: 100%;
	}
	.back{
		color: #fff;
		font-size: 20px;
		position: fixed;
		top: 3%;
		left: 2%;
		z-index: 9999;
	}
	main>span{
		z-index: 9999;
		color: #fff;
		position: fixed;
		left: 22%;
		top: 4%;
		font-size: 16px;
		width:200px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;

		/*padding-top:60px ;*/
	}
	.text{
		margin-top: 20px;
		padding-bottom: 100px;
	}
	.content{
		padding-top: 60px;
		margin-left: 10px;
	}
	.title{
		font-size: 18px;
	}
	.author{
		margin-top: 20px;
		padding-bottom: 10px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.top{
		border-radius: 1px;
		background: #369219;
		color: #fff;
		font-size: 16px;
	}
	.other{
		border-radius: 1px;
		background: #c5c5c7;
		font-size: 16px;
		color: #fff;
	}
	img{
		width: 40px;
		height: 40px;
		margin-top: 20px;
		margin-left: 10px;
		border-radius: 50%;
	}
	i{
		color: #808080;
		font-size: 12px;
	}
	.text img{
		width: 100px;
		height: 100px;
	}
</style>