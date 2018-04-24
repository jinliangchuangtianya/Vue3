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
import App2 from './App2'

new Vue({
  el: '#app',
  components: { App2 },
  template: '<App2/>'
})
