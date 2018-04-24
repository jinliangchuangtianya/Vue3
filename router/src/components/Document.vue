<template>
    <div>
      我是文档
      <p>{{test}}</p>
      <hr>
      <ul class="nav">
        <!--<router-link to="/document" exact active-class="children-active" tag="li">study</router-link>
        <router-link to="/document/work" active-class="children-active" tag="li">work</router-link>
        <router-link to="/document/hobby" active-class="children-active" tag="li">hobby</router-link>-->
        <router-link :to="{name:'document'}" exact active-class="children-active" tag="li">study</router-link>
        <router-link :to="{name:'work'}" active-class="children-active" tag="li">work</router-link>
        <router-link :to="{name:'hobby'}" active-class="children-active" tag="li">hobby</router-link>
      </ul>
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "document",
        data(){
            return {
              test : '改变之前的数据'
            }
        },
        /*进入当前组件之前执行的导航钩子函数*/
         beforeRouteEnter(to, from, next){
          console.log('进入组件之前触发的钩子函数beforeRouteEnter');

          /*注意访问不到this,因为beforeRouteEnter执行的时候组件还没有创建*/
          //console.log(this);

          /*可以在next函数中添加回调,回调中接收的参数就是当前组件实例*/
          next((vm)=>{
            vm.test= "通过组件路由方式改变数据"
          });

        },
        /*当前组件的导航更新之前触发的函数*/
        beforeRouteUpdate(to, from, next){
          console.log('beforeRouteUpdate');
          next();
        },
        /*离开当前组件之前触发的导航钩子函数*/
        beforeRouteLeave(to, from, next){
          console.log('beforeRouteLeave');
          next();
        }
    }
</script>

<style scoped>

</style>
