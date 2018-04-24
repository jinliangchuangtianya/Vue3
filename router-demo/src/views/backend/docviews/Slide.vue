<template>
    <div class="silde-wrap">
        <div class="slid">
          <span>基础</span>
          <ul>
            <router-link to="#start" tag="li"><a>开始</a></router-link>
            <router-link to="#jtrouter" tag="li"><a>动态路由</a></router-link>
            <router-link to="#qtrouter" tag="li"><a>嵌套路由</a></router-link>
          </ul>
        </div>
        <div class="slid">
          <span>进阶</span>
          <ul>
            <router-link to="#routaryxx" tag="li"><a>路由元信息</a></router-link>
            <router-link to="#navgz" tag="li"><a>导航钩子</a></router-link>
            <router-link to="#trantion" tag="li"><a>过渡动效</a></router-link>
          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slide"
    }
</script>

<style scoped>

</style>
