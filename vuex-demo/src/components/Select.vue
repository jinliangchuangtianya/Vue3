<template>
    <div class="select">
      <select-input></select-input>
      <select-list v-show="isShow"></select-list>

      <increment></increment>
    </div>
</template>

<script>
    import SelectInput from './SelectInput'
    import SelectList from './SelectList'
    import Increment from './Increment'
    import {mapState, mapGetters, mapAcyins, mapMutations} from "vuex"
    export default {
        name: "mselect",
        components : {
          SelectInput,
          SelectList,
          Increment
        },
        computed : {
          ...mapState(['isShow'])
        }
    }
</script>

<style scoped>

</style>
