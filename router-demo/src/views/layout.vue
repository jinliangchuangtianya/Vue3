<template>
    <div class="layerout">
      <Header-nav></Header-nav>
      <ol class="breadcrumb">
        <router-link to="/" tag="li"><a href="">首页</a></router-link>
        <li class="active">{{flag}}</li>
      </ol>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  //import HeaderNav from '@/components/Header'

    let flags = {
        project : '我的项目',
        workbench : '工作台',
        doc : '文档'
    }

    export default {
        name: "layout",
        components : {
          /*
          * Vue 异步组件
          *     resolve 参数可以直接 require('@/components/Header')  组件路径
          * */
          HeaderNav : (resolve)=>{
            //模拟ajax请求数据
            setTimeout(()=>{
              resolve(require('@/components/Header'))
            },2000)
          }
        },
        data(){
          return {
            flag : ''
          }
        },
        beforeRouteEnter(to, from, next){
          next((vm)=>{
            vm.flag = flags[to.path.slice(1)];
          })
        },
        watch : {
            $route(){
              this.flag = flags[this.$route.path.replace(/\//g,'')];
            }
        }
    }
</script>

<style scoped>

</style>
