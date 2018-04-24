<template>
    <form class="login form-horizontal" @submit.prevent="sendLogin">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-4 col-lg-2 control-label">用户名</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="inputEmail3" placeholder="userName" ref="username">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-4 col-lg-2 control-label">密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password" ref="password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-4 col-lg-offset-2  col-sm-10">
          <input type="submit" class="btn btn-success" value="一键登录">
        </div>
      </div>
    </form>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            path : '/'
          }
        },
        methods :{
          sendLogin(){
            console.log(this.$cantion);
            console.log(this.$abc);

            //用ref操作DOM
            let username = this.$refs.username.value;
            let password = this.$refs.password.value;
            if(!username){
              alert('填写用户名');
              return;
            }
            if(!password){
              alert('填写密码');
              return;
            }
            /*调用自定义的插件,存储localstorage*/
            this.$local.save('user', {login : true,username, password});
            let redirect = this.$route.query.redirect;
            if(!redirect) redirect = 'project';
            this.$router.push('/' + redirect);
          }
        }
    }
</script>

<style scoped>

</style>
