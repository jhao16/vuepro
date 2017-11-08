<template>
	<main>
		<div class="head">
			<img src="../../assets/logo.png" alt="" /><span>Vue.js</span>
		</div>
		<div class="find">
			<div>
				<i class="glyphicon glyphicon-search"></i><input type="text" id="search" @focus="change" @blur="blur"/>
			</div>
			<ul>
				<li v-for="v in msg"><a href="index.html">{{v}}</a></li>
			</ul>
		</div>
		
		<div class="signup">
			<div class="tohome">
				<a href="index.html">主页</a>&nbsp;<span>/&nbsp;注册</span>
			</div>
			<p>用户名</p>
			<input type="text" />
			<p>密码</p>
			<input type="password" />
			<p>确认密码</p>
			<input type="password" />
			<p>电子邮箱</p>
			<input type="email" />
			<button class="btn1">注册</button>
			<button class="btn2"><a href="https://www.vue-js.com/auth/github/new">通过GitHub登录</a></button>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				msg: ['首页','交互教程','微信公众号','VUE2.0','参考资料','API','关于','注册','登录']
			}
		},
		methods:{
			change:function(){
				search.style.background = "#fff"
			},
			blur:function(){
				search.style.background = "#4f9639"
			}
		}
	}
</script>

<style scoped>
	main{
		padding-top: 60px;
		background: #e1e1e1;
		padding-bottom:600px;
	}
	.head{
		z-index: 9999;
		position: fixed;
		left: 35%;
		top: 2%;
	}
	.head span{
		color: #fff;
		font-size: 18px;
	}
	img{
		height: 45px;
		width: 45px;
	}
	.find{
		position: fixed;
		z-index: 9999;
		background-color: #1c6132;
		height: 150px;
	}
	.find input{
		width: 65vw;
		height: 26px;
		text-align: center;
		border-radius: 20px;
		border: none;
		outline: none;
		position: absolute;
		left: 20%;
		background-color: #4f9639;
		transition: all 1s;
	}
	.find ul{
		padding-top: 30px;
	}
	.find i{
		position: absolute;
		z-index: 2;
		left: 22%;
		top: 3%;
	}
	.find ul{
		width: 100vw;
	}
	.find ul>li{
		float: left;
		margin-left: 45px;
		text-align: center;
		margin-top: 18px;
	}
	.find ul li a{
		color: #fff;
	}
	.signup{
		position: absolute;
		padding-top: 170px;
		margin-top: 20px;
		background-color: #fff;
		padding-bottom: 80px;
	}
	.tohome{
		height: 40px;
		background-color: #f6f6f6;
		font-size: 15px;
		margin-bottom: 35px;
	}
	.tohome>a{
		color: #1c6132;
		line-height: 40px;
		margin-left: 15px;
	}
	.signup p{
		margin-top: 20px;
		margin-left: 10px;
	}
	.signup input{
		width: 85vw;
		margin-left: 10px;
		border-radius: 5px;
		height: 32px;
		border: 1px solid #ccc;
	}
	.signup button{
		margin-top: 40px;
	}
	.btn1{
		border: none;
		background-color: #3374de;
		color: #fff;
		height: 35px;
		width: 55px;
		border-radius: 5px;
		margin-left: 20px;
	}
	.btn2{
		border: none;
		background-color: #7597d4;
		height: 35px;
		width: 150px;
		border-radius: 5px;
	}
	.btn2 a{
		color: #fff !important;
	}
</style>