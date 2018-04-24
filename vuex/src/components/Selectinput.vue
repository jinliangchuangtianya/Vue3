<template>
    <div class="selectInput">
      <input type="text" @click="changeShow" :value="text">
    </div>
</template>

<script>
    export default {
        name: "selectinput",
        props : ['is-show', "text"],
        computed :{
          init(){
            return this.isShow;
          }
        },
        methods : {
          changeShow(){
            this.$emit("update:isShow", !this.init)
          }
        }
    }
</script>

<style scoped>

</style>
