<template>
    <div class="Increment">
      <input type="button" value="+" @click="addHandle">
      <span>{{num}}</span>
      <input type="button" value="-" @click="deHandle">
      <p>{{getNum}}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapAcyins, mapMutations} from "vuex"
    export default {
        name: "increment",
        computed : {
          ...mapState({
            num : state => state.Increment.num
          }),
          ...mapGetters(['getNum'])
        },
      methods : {
        ...mapMutations({
          addHandle : 'addNum',
          deHandle : 'deNum'
        })
      }
    }
</script>

<style scoped>

</style>
