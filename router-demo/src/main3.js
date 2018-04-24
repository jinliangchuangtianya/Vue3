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
import App3 from './App3'

new Vue({
  el: '#app',
  components: { App3 },
  template: '<App3/>'
})
