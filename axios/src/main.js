// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*
*
* 在 Vue中使用 axios
*         首先安装  npm install axios vue-axios --save
*         然后在 main.js中使用 import 引入
*         最后使用 Vue.use(VueAxios, Axios) 注册插件
*
*         直接在组件中使用 this.$http[method]()
*
* */
import Axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
