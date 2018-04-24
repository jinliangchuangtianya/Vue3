<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <!--
          router-link 路由标签
          to 跳转地址
          tag 生成的标签
          active-class 选中的样式类
          event 改变行为
          exact 精确匹配
        -->
        <router-link :to="index" exact tag="li" event="mouseover">
          <i class="fa fa-bandcamp"></i>
          <span>home</span>
        </router-link>
        <router-link :to="{path:'/about#abc'}" tag="li">
          <i class="fa fa-address-book"></i>
          <span>about</span>
        </router-link>
        <router-link to="/document" tag="li" active-class="nav-active">
          <i class="fa fa-grav"></i>
          <span>document</span>
        </router-link>
        <router-link to="/user" tag="li" active-class="nav-active">
          <i class="fa fa-grav"></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>
    <!--当前导航的meta信息-->
    <p style="position: absolute; top: 10px; right: 15px;">当前导航的meta信息 : {{$route.meta}}</p>

    <!--编程式导航,编写代码的方式来实现导航的切换-->
    <div style="position: absolute;top: 28px; left: 15px;">
      <input type="button" value="后退"  @click="backHandle">
      <input type="button" value="前进"  @click="forwardHandle">
      <input type="button" value="控制前进后退的步数"  @click="goHandle">
      <input type="button" value="控制跳转指定的导航push"  @click="pushHandle">
      <input type="button" value="控制跳转指定的导航replace"  @click="replaceHandle">
    </div>

    <!--
      transition 设置动画效果 注意只能渲染单个router-view;多个使用transition-group,子元素必须都设置唯一的key
      利用css3的特性实现
      v-enter 进入的开始的状态
      v-enter-active 进入的活动的状态
      v-enter-to 进入的结束的状态
      v-leave 离开的开始状态
      v-leave-active 离开的活动状态
      v-leave-to 离开的结束状态

      mode 过渡模式
      out-in 当前元素先进行过度,完成之后新元素过度进入
      in-out 新元素先进行过度,完成之后当前元素过度离开

      name 匹配动画的名字
    -->
    <transition-group :name="names">
      <!--
         在router-view标签上设置的样式会自动渲染到目标组件的根节点 class="center"
         一个路径可以匹配多个组件，可以给多出的router-view取名name name="slider"
       -->
      <router-view name="slider" key="1"></router-view>
      <router-view class="center" key="2"></router-view>
    </transition-group>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      index : '/',
      names : ''
    }
  },
  methods : {
    /*
      编程式导航,控制浏览器的历史记录-->即通过编写代码的方式来实现导航的切换;(通过路由实例$router上的方法)
      back 回退一步
      forward 前进一步
      go 指定前进或回退的步数  步数为:0,刷新当前页面;

      导航到不同的url
      push 像history栈里添加一个新的记录
      replace 替换history栈里的当前记录
    */
    backHandle(){
      this.$router.back();
    },
    forwardHandle(){
      this.$router.forward();
    },
    goHandle(){
      this.$router.go(-2);
    },
    pushHandle(){
      //this.$router.push('/document');  //导航到/document上
      this.$router.push({path:'/document',query:{name:'abc',id:12}});  //导航到/document上
    },
    replaceHandle(){
      this.$router.replace({path:'/document'})
    }
  },
  watch : {
    /*监控路由的变化获得当前和目标路由的meta信息*/
    $route(to, from){
        console.log(to.meta.index);     //目标导航的下标
        console.log(from.meta.index);   //离开导航的下标
       /* 左右导航切换*/
       if(to.meta.index > from.meta.index){
          this.names = 'left'
       }
       else{
         this.names = 'right'
       }
    }
  }
}
</script>

<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 2s;
}

.left-enter{
  transform: translateX(100%);
}
.left-enter-to{
  transform: translateX(0);
}
.left-enter-active,.left-leave-active,.right-enter-active,.right-leave-active{
  transition: 1s;
}
.left-leave{
  transform: translateX(0);
}
.left-leave-to{
  transform: translateX(-100%);
}
.right-enter{
  transform: translateX(-100%);
}
.right-leave-to{
  transform: translateX(100%);
}

</style>
