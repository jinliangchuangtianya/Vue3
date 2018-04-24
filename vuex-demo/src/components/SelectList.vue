<template>
    <div>
      <ul>
        <li v-for="item in list" @click="changeTitle({title : item.title})">{{item.title}}</li>
      </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapAcyins, mapMutations} from "vuex"
    export default {
        name: "select-list",
        computed : {
          ...mapState(['list'])
        },
        methods : {
          ...mapMutations({
            changeTitle : 'changeTitleMutations',
          })
        },
        created(){
            //通过store下面actions中的方法获取数据
           this.$store.dispatch('getList');
        }
    }
</script>

<style scoped>

</style>
