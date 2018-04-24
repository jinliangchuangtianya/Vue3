/*
  支持IE9的插件
    安装 npm install es6-promise
    然后引入
        import Promise from 'es6-promise';
        Promise.polyfill();
*/
import Promise from 'es6-promise';
Promise.polyfill();
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/assets/css/app.css'

Vue.config.productionTip = false


/*
  自定义Vue属性
  Vue.prototype.key = value
*/
Vue.prototype.$cantion = '这是自定义的属性';

/*
  注册自定义插件
  obj 被注册的对象
  install 必须填写的函数
      vue 参数即Vue的构造函数
      options 需要传的参数,即 Vue.use(obj, {})中的 "{}"
  Vue.use(obj, {}) 最后注册插件
*/
let obj = {
  install(vue, options){
    console.log(vue)
    console.log(options)
    //自定义Vue原型的属性
    vue.prototype.$abc = '自定义';
  }
}
Vue.use(obj, {a:1})

/*
  导入写好的插件并注册插件
*/
import Utils from '@/lib/utils'
Vue.use(Utils);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
