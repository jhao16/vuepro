<template>
	<main>
		<img src="../../assets/logo.png" alt="" class="logo"/>
		
		<router-link to="login"><img src="../../assets/pic/user.jpg" alt="" class="homeimg"/></router-link>
		
		<v-tab></v-tab>
		<router-view></router-view>
	</main>
</template>

<script>
	import vtab from '../index/tab.vue'
	
	 export default{

        components:{
          'v-tab':vtab,
        }
    }
</script>

<style>
	.logo{
		height:48px;
		width: 48px;
		position: fixed;
		z-index: 9999;
		left:0;
  		top:0;
	}
	.homeimg{
		height: 30px;
		width: 30px;
		position: fixed;
		z-index: 9999;
		right: 5%;
		top: 2%;
		border-radius: 50%;
		overflow: hidden;
	}
</style>