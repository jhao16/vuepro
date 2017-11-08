import Vue from 'vue'
import  VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import * as filters from './js/filter' //import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回
import "./assets/css/cssreset.css"

// 定义Vue可以使用VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)

import routers from './js/router.js'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器

new Vue({
  el: '#app',
  render: h => h(App),
  router:routers
})



