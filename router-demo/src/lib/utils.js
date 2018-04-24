/*
*
* Vue插件
* 用来获取和设置localstorage的值
*
* */
let local = {
  save(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },
  fetch(key){
    return JSON.parse(localStorage.getItem(key)) || {};
  }
}

export default {
  install(vue){
    vue.prototype.$local = local;
  }
}
