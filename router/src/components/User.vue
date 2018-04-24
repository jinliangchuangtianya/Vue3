<template>
  <div>
    我是User
    <div class="usetList">
      <router-link style="padding: 0 20px; font-size: 20px;" active-class="is-active" :to="{path:'/user/'+ item.tip +'/'+item.id,query:{info:'follow'}}" v-for="(item, index) in userList" :key="index">{{item.userName}}</router-link>
    </div>
    <div class="user-info" v-if="userInfo.id">
      <p>姓名: {{userInfo.userName}}</p>
      <p>性别: {{userInfo.sex}}</p>
      <p>爱好: {{userInfo.hobby}}</p>
      <hr>
      <!-- <router-link exact to="?info=follow">{{userInfo.userName}}的关注</router-link>
      <router-link exact to="?info=share">{{userInfo.userName}}的分享</router-link>-->
      <router-link exact :to="{path:'',query:{info:'follow'}}">{{userInfo.userName}}的关注</router-link>
      <router-link exact :to="{path:'',query:{info:'share'}}">{{userInfo.userName}}的分享</router-link>
      <div >
        {{$route.query}}
      </div>
    </div>
  </div>
</template>

<script>
    import userList from '@/data';
    export default {
        name: "users",
        data(){
          return {
            userList,
            userInfo : {}
          }
        },
        watch : {                        //监听路由信息的变化
            $route(){
              console.log(this.$route);
              this.getData()
            }
        },
        created(){                      //一般再这个钩子函数中发送ajax
          console.log(this.$route)     //$route 当前激活的路由信息
          console.log( this.userInfo)
          this.getData();
        },
        methods : {
          getData(){
            let ID = this.$route.params.userId;
            if(ID){
              this.userInfo = this.userList.filter((item)=>{
                return item.id == ID;
              })[0]
            }
            else{
              this.userInfo = {};
            }
          }
        }
    }
</script>

<style scoped>

</style>
