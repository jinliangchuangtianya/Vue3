<template>
    <div class="selectList">
        <ul>
          <li v-for="item in list" @click="changeText(item)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "select-list",
        props :["isShow"],
        computed : {
          init(){
            return this.isShow;
          }
        },
        data(){
          return {
            list : [
              'javascript',
              'html',
              'css',
              'Vue',
              'php',
              'angular'
            ]
          }
        },
      methods : {
        changeText(val){
          console.log(val)
          this.$emit('update:inputtext', val);
          this.$emit('update:isShow', !this.init);
        }
      }
    }
</script>

<style scoped>

</style>
