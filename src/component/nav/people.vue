<template>
	<main>
		<div class="top">
			<p class="back" @click="back()">&lt;</p>
			<h3>用户信息</h3>
		</div>
		<div class="user">
			<img :src="list.avatar_url" alt="" />
			<div class="user_r">
				<p>{{list.loginname}}</p>
				<p style="font-size: 11px;">积分:{{list.score}}</p>
				<p style="font-size: 11px;">注册时间:{{list.create_at | formatDate}}</p>
			</div>
		</div>
		<div class="content">
			<ul>
				<li>
					<i class="glyphicon glyphicon-comment"></i>
					<span class="message">最近的话题:</span>
					<span class="num">{{list.recent_topics.length}}</span>
					<span class="glyphicon glyphicon-chevron-down icon"></span>
				</li>
				<li>
					<i class="glyphicon glyphicon-globe"></i>
					<span class="message">最近的回复:</span>
					<span class="num">{{list.recent_replies.length}}</span>
					<span class="glyphicon glyphicon-chevron-down icon"></span>
				</li>
				<li>
					<i class="glyphicon glyphicon-star"></i>
					<span class="message">收藏的话题:</span>
					<span class="num">{{list.collect_topics.length}}</span>
					<span class="glyphicon glyphicon-chevron-down icon"></span>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				list:''
			}
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		},
		mounted() {
			this.$http.get('https://www.vue-js.com/api/v1/user/'+this.$route.params.id).then(function(res) {
					this.list = res.body.data;
					console.log(this.list)
			})
		}
	}
</script>

<style scoped>
	main{
		margin-top: 60px;
	}
	.back{
		color: #fff;
		font-size: 20px;
		position: fixed;
		top: 3%;
		left: 2%;
		z-index: 9999;
	}
	h3{
		position: absolute;
		color: #fff;
		left: 35%;
		top: 1%;
		z-index: 9999;
	}
	.top>a{
		position: absolute;
		z-index: 9999;
		color: #fff;
		top: 4%;
		left: 88%;
		font-size: 18px;
	}
	.user img{
		height: 70px;
		width: 70px;
		margin: 10px 10px;
	}
	.user_r{
		position: absolute;
		left:32% ;
		top: 12%;
	}
	ul{
		width: 100%;
	}
	ul>li{
		height: 48px;
		width: 100vw;
		line-height: 48px;
		color: #474a4f;
		font-size: 16px;
		margin-top: 10px;
	}
	ul>li>i{
		margin-left: 10px;
	}
	.message{
		margin-left: 30px;
	}
	.icon{
		float: right;
		margin-right: 10px;
		margin-top: 10px;
	}
</style>