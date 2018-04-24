<template>
  <div id="app">
    <!--开发环境-->
    <!--<div style="width: 200px; margin: 0 auto"><a href="http://localhost:8080/index2.html">跳转到index2</a></div>-->
    <!--打包上线-->
    <div style="width: 200px; margin: 0 auto"><a href="http://localhost/dist/index2.html">跳转到index2</a></div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

