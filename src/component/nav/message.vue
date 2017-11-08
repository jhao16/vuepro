<template>
	<main>
		<h3>我的信息</h3>
		<ul>
			<li>
				<i class="glyphicon glyphicon-eye-close"></i>
				<span class="message">未读消息</span>
				<span class="num">{{list.hasnot_read_messages.length}}</span>
				<span class="glyphicon glyphicon-chevron-down icon"></span>
			</li>
			<li>
				<i class="glyphicon glyphicon-eye-open"></i>
				<span class="message">已读消息</span>
				<span class="num">{{list.has_read_messages.length}}</span>
				<span class="glyphicon glyphicon-chevron-down icon"></span>
			</li>
		</ul>
		<router-link to="/login">请先登录</router-link>
	</main>	
</template>

<script>
	export default {
		data() {
			return {
				msg:'a0489070-e819-4094-955e-8d09aeebbb3a',
				list:''
			}
		},
		mounted() {
			this.$http.get('https://www.vue-js.com/api/v1/messages?',{
							params:{
								accesstoken:this.msg,
							}
						}).then(function(res) {
					this.list = res.body.data;
			})
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
	ul{
		padding-top: 60px;	
		width: 100%;
	}
	ul>li{
		height: 48px;
		width: 100vw;
		line-height: 48px;
		color: #474a4f;
		font-size: 18px;
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
	a{
		display: block;
		color: #fff;
		background: rgba(0,0,0,0.4);
		box-sizing: border-box;
		position: absolute;
		height: 36px;
		width: 112px;
		text-align: center;
		line-height: 36px;
		font-size: 2rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
</style>