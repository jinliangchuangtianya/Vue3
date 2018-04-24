<template>
    <div class="home">
        <div class="home-header">
          <img src="../assets/logo.png" alt="">
          <div class="login-wrap">
            <router-link to="/login" tag="button" v-if="!isLogin" class="btn btn-black">登录</router-link>
            <div class="user" v-else><img src="../assets/user.jpg" style="width: 40px;" alt=""></div>
          </div>
        </div>
        <h1>一起学习Vue-Router</h1>
        <div class="btn-wrap">
          <router-link to="/management" tag="button" class="btn btn-success">我的项目</router-link>
          <router-link to="/doc" tag="button" class="btn btn-success">我的文档</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
          return{
            isLogin : false
          }
        },
        created(){   //发送ajax,在这里用来获取localstorage的user
          let userInfo = this.$local.fetch('user');
          this.isLogin = userInfo.login
        }
    }
</script>

<style scoped>

</style>
