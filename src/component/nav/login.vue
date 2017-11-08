<template>
	<main>
		<p class="back" @click="back()">&lt;</p>
		<h3>登录页面</h3>
		<input type="text" placeholder="请输入accessToken"/>
		<button>登录</button>
		<router-link to="/signup" class="signup">注册</router-link>
		<p id="get" @click="show"><i class="glyphicon glyphicon-question-sign"></i> 如何获取ACCESSTOKEN</p>
		<p id="show" @click="show">登录vue.js中文社区，在设置页面可看到自己的accessToken</p>
	</main>
</template>

<script>
	export default {
		methods:{
			back:function(){
				this.$router.go(-1)
			},
			show:function(){
				if(show.style.display=="none"){
					show.style.display="block"
				}else{
					show.style.display="none"
				}
			}
		}
	}
</script>

<style scoped>
	h3{
		position: absolute;
		top: 0;
		left: 38%;
		color: #fff;
		z-index: 9999;
	}
	input{
		border: none;
		border-bottom: 1px solid #ccc;
		position: absolute;
		left: 30%;
		top: 35%;
		outline:none;
	}
	button{
		display: block;
		height: 36px;
		width: 88px;
		background: rgba(0,0,0,0.4);
		color: #fff;
		border: none;
		outline:none;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 50%;
	}
	#get{
		display: block;
		box-shadow: 3px 3px 5px #888888;
		width: 220px;
		height: 36px;
		text-align: center;
		line-height: 36px;
		color: #474a4f;
		position: absolute;
		top: 65%;
		left: 0;
		right: 0;
		margin: auto;
		
	}
	#show{
		display: none;
		position: absolute;
		bottom: 7%;
		height: 80px;
		text-align: center;
		line-height: 30px;
		width: 100%;
		background: rgba(0,0,0,0.7);
		color: #fff;
	}
	#get i{
		color: #474a4f;
	}
	.back{
		color: #fff;
		font-size: 20px;
		position: fixed;
		top: 3%;
		left: 2%;
		z-index: 9999;
	}
	.signup{
		z-index: 9999;
		color: #ff5252;
		position: absolute;
		font-size: 16px;
		right: 5%;
		top: 4%;
		
	}
</style>