<template>
	<main>
		<div id="preloader_1">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		
		<ul>
			<li v-for="v in msg">
				<router-link :to="{path:'/people/'+v.author.loginname,params:{id:v.author.loginname}}"><img :src="v.author.avatar_url" alt="" /></router-link>
				<div class="content">
					<span v-if="v.top" class="top">置顶</span>
					<span v-else-if="v.tab=='share'" class="other">分享</span>
					<span v-else-if="v.tab=='job'" class="other">招聘</span>
					<span v-else-if="v.tab=='week'" class="other">week</span>
					<span v-else-if="v.tab=='good'" class="other">精华</span>
					<span v-else class="other">问答</span>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<router-link class="title" style="font-size: 14px;color: #000;" :to="{path:'/contents/'+v.id,params:{content:v.id}}">{{v.title}}</router-link>
					<div class="under">
						&nbsp;&nbsp;<i class="glyphicon glyphicon-comment"></i>&nbsp;<span>{{v.reply_count}}</span>
						&nbsp;&nbsp;<i class="glyphicon glyphicon-eye-open"></i>&nbsp;<span>{{v.visit_count}}</span>
						<span style="float: right;margin-right: 5px;">{{v.last_reply_at | formatDate}}</span>
					</div>
				</div>
				
			</li>
		</ul>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				msg: []
			}
		},
		mounted() {
			this.$http.get('https://www.vue-js.com/api/v1/topics?tab=ask').then(function(res) {
				this.msg = res.body.data
				preloader_1.style.display="none"
			})
		}
	}
	
</script>

<style scoped>
	main{
		background:#eff2f7;
		padding-top: 90px;
		padding-bottom: 50px;
	}
	.top{
		display: inline-block;
		width: 26px;
		height: 16px;
		border-radius: 1px;
		background: #369219;
		color: #fff;
	}
	.other{
		display: inline-block;
		width: 26px;
		height: 16px;
		border-radius: 1px;
		background: #c5c5c7;
		color: #fff;
	}
	ul>li{
		margin-top: 10px;
		width: 100%;
		background-color: #fff;
		padding-bottom: 15px;
	}
	ul>li i{
		color: #808080;
		font-size: 12px;
	}
	ul>li>a>img{
		width: 36px;
		height: 36px;
		margin-top: 20px;
		margin-left: 10px;
	}
	.content{
		margin-left: 60px;
		margin-top: -35px;
	}
	.under{
		margin-top: 15px;
	}
	ul>li span{
		font-size: 12px;
		color: #808080;
	}
	#preloader_1 {
		position: fixed;
		top: 50%;
		left: 45%;
	}
	
	#preloader_1 span {
		display: block;
		bottom: 0px;
		width: 9px;
		height: 5px;
		background: #9b59b6;
		position: absolute;
		animation: preloader_1 1.5s infinite ease-in-out;
	}
	
	#preloader_1 span:nth-child(2) {
		left: 11px;
		animation-delay: .2s;
	}
	
	#preloader_1 span:nth-child(3) {
		left: 22px;
		animation-delay: .4s;
	}
	
	#preloader_1 span:nth-child(4) {
		left: 33px;
		animation-delay: .6s;
	}
	
	#preloader_1 span:nth-child(5) {
		left: 44px;
		animation-delay: .8s;
	}
	
	@keyframes preloader_1 {
		0% {
			height: 5px;
			transform: translateY(0px);
			background: #9b59b6;
		}
		25% {
			height: 30px;
			transform: translateY(15px);
			background: #3498db;
		}
		50% {
			height: 5px;
			transform: translateY(0px);
			background: #9b59b6;
		}
		100% {
			height: 5px;
			transform: translateY(0px);
			background: #9b59b6;
		}
	}
</style>