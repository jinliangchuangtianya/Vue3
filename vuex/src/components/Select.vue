<template>
    <div class="select">
        <select-input :is-show.sync="isShow" :text="text"></select-input>
        <select-list v-show="isShow" :is-show.sync="isShow" :inputtext.sync="text"></select-list>
    </div>
</template>

<script>
    import SelectInput from "@/components/SelectInput"
    import SelectList from "@/components/SelectList"
    export default {
        name: "select-test",
        data(){
          return {
            isShow : false,
            text : ""
          }
        },
        components : {
          SelectInput,
          SelectList
        }
    }
</script>

<style scoped>

</style>
