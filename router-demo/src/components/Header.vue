<template>
    <div class="header">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <router-link to="/" class="navbar-brand"><img src="../assets/mlogo.png" width="60" alt=""></router-link>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <router-link :to="{name:'Project'}" tag="li">
                <a href=""><span class="glyphicon glyphicon-scale"></span> 我的项目</a>
              </router-link>
              <router-link :to="{name:'Workbench'}" tag="li">
                <a href=""><span class="glyphicon glyphicon-folder-open"></span> 工作台</a>
              </router-link>
              <router-link :to="{name:'Doc'}" tag="li">
               <a href=""><span class="glyphicon glyphicon-credit-card"></span> 文档</a>
              </router-link>
            </ul>
            <div class="pull-right user" @mouseover="show = true"  @mouseleave="show = false" v-show="isLogin">
              <img src="../assets/user.jpg" width="40" alt="">
              <transition name="out">
                  <div v-show="show" class="out" @click="loginout">退出</div>
              </transition>
            </div>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </div>
</template>

<script>
    export default {
        name: "headerv",
        data(){
            return {
              show : false,
              isLogin : false
            }
        },
      methods : {
        loginout(){
          this.$local.save('user',{});
          this.$router.push('/login');
        }
      },
      created(){
          this.isLogin = this.$local.fetch('user').login;
      }
    }
</script>

<style scoped>

</style>
