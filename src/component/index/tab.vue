<template>
	<main class="home">
		<div class="tab">
			<router-link to="/all">全部</router-link>
			<router-link to="/elite">精华</router-link>
			<router-link to="/week">week</router-link>
			<router-link to="/share">分享</router-link>
			<router-link to="/ques">问答</router-link>
			<router-link to="/recruit">招聘</router-link>
		</div>
	</main>
</template>

<script>
</script>

<style>
	.home{
		width: 100%;
		position: fixed;
		z-index: 100;
		top: 60px;
		left: 0;
	}
	.tab{
		width: 100%;
		background-color: #1c6132;
		height: 35px;
		
	}
	.tab a{
		margin-left: 4px;
		float: left;
		width: 15%;
		line-height: 25px;
		color: #c8c9ca;
		font-size: 13px;
		text-decoration: none;
		text-align: center;
	}
</style>