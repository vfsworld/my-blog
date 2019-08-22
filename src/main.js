// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResources from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false

// Vue.use(VueResources)
Vue.use(VueRouter)
//Vue.use(axios)

//全局配置axios
axios.defaults.baseURL = "https://wd4757811722fvggvb.wilddogio.com"
//axios.defaults.headers.common['Authorization'] = 'Token'
//axios.defaults.headers.post['Content-type'] = 'application/urlencode'
//axios.defaults.headers.get['Accepts'] = 'application/json'
 
//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color= "#" + Math.random().toString(16).slice(2,8);
//   }
// })

Vue.directive('theme',{
    bind(el,binding,vnode){
      if(binding.value == 'wide'){
        el.style.maxWidth = "1260px";
      } else if(binding.value == 'narrow'){
        el.style.maxWidth = "560px";
      }
      
      if(binding.arg == 'column'){
        el.style.background = "#6677cc";
        el.style.padding = "20px";
      }
    }
})

//自定义过滤器
// Vue.filter("to-uppercase",(value)=>{
//   return value.toUpperCase(); 
// })
Vue.filter("snippet",(value)=>{
  //console.log(value);
  return value.slice(0,100);
})

//创建路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
