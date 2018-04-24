<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  /*
  *
  * 使用axios 首先安装axios模块 npm install axios
  * 然后使用 import 导入
  *
  *    axios({
          method : "post",
          url : "https://www.easy-mock.com/mock/5add8e9c94ed9e03b490c9c0/example/axios-test"
       })
  *
*      axios.get(url, { params : { a : 1, b : 2 } })  //get方式 ：第二个参数是配置，里面的 params 就是传过去的参数
*      axios.post(url, { a : 1, b : 2 }, [,config])              //post方式 ：第二个参数就是传过去的参数  config配置
*
*
*   自定义请求实例 axios.create(config)
*   详细见 AxiosTest.vue
*
  * */
import axios from "axios"

export default {
  name: 'App',
  created(){
    /*axios({
      method : "post",
      url : "https://www.easy-mock.com/mock/5add8e9c94ed9e03b490c9c0/example/axios-test"
    })
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })*/

    /*axios.post("https://www.easy-mock.com/mock/5add8e9c94ed9e03b490c9c0/example/axios-test", {
        a : 1,
        b : 'def'
    })
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
