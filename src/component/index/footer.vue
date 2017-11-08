<template>
	<main class="footer">
		<router-link to="/home">
			<i class="glyphicon glyphicon-home"></i><br />
			首页
		</router-link>
		<router-link to="/message" >
			<i class="glyphicon glyphicon-envelope"></i><br />
			信息
		</router-link>
		<router-link to="/my">
			<i class="glyphicon glyphicon-user"></i><br />
			我的
		</router-link>
		<router-link to="/more">
			<i class="glyphicon glyphicon-th-list"></i><br />
			更多
		</router-link>
	</main>
</template>

<script>
</script>

<style scoped>
	.footer{
		background-color: #fff;
		position:fixed;
		bottom:0px;
		left:0px;
		width:100%;
		border-top: 1px solid #ccc;
		height: 55px;
	}
	.footer a{
		width:25%;
		float:left;
		text-align:center;
		text-decoration: none;
		color: #474A4F;
	}
	.footer i{
		font-size: 16px;
		margin-top: 10px;
	}
</style>