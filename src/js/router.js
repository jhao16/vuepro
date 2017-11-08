import VueRouter from 'vue-router'


import home  from  '../component/nav/home.vue'
import message  from  '../component/nav/message.vue'
import my  from  '../component/nav/my.vue'
import more  from  '../component/nav/more.vue'
import all  from  '../component/nav/all.vue'
import elite  from  '../component/nav/elite.vue'
import week  from  '../component/nav/week.vue'
import share  from  '../component/nav/share.vue'
import ques  from  '../component/nav/ques.vue'
import recruit  from  '../component/nav/recruit.vue'
import login  from  '../component/nav/login.vue'
import signup  from  '../component/nav/signup.vue'
import contents  from  '../component/nav/contents.vue'
import people  from  '../component/nav/people.vue'


export default new VueRouter({
	routes:[
		{
			path:'/home',
			component:home,
			children:[
				{path:'/all',component:all},
				{path:'/elite',component:elite},
				{path:'/week',component:week},
				{path:'/share',component:share},
				{path:'/ques',component:ques},
				{path:'/recruit',component:recruit},
				{path:'/',component:all}
			]
		},
		{path:'/message',component:message},
		{path:'/my',component:my},
		{path:'/more',component:more},
		{path:'/login',component:login},
		{path:'/signup',component:signup},
		{path:'/contents/:id',component:contents},
		{path:'/people/:id',component:people},
		{path:'/',component:signup}
	]

})