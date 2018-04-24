<template>
    <div>
      <h1>一起学习axios</h1>
    </div>
</template>

<script>

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
    export default {
        name: "axios-test",
        created(){
            this.$http.get("https://www.easy-mock.com/mock/5add8e9c94ed9e03b490c9c0/example/list")
              .then(response=>{
                console.log(response.data)
              })
              .catch(error=>{
                console.log(error)
              })
        }
    }
</script>

<style scoped>

</style>
