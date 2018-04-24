<template>
    <div>
      <input type="text" @click="showHandle" :value="title">
    </div>
</template>

<script>
    import {mapState, mapGetters, mapAcyins, mapMutations} from "vuex"
    export default {
        name: "select-input",
        computed : {
          ...mapState(['title'])
        },
        methods : {
          ...mapMutations({
            showHandle : 'changeShowMutations'
          })
        }
    }
</script>

<style scoped>

</style>
