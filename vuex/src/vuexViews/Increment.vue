<template>
    <div>
      <h3>简易加减法</h3>
      <input type="button" value="+" @click="addHandle({ n:5 })">
      <span>{{count}}</span>
      <input type="button" value="-" @click="deHandle({ n:10 })">
      <p>{{num2}}</p>
    </div>
</template>

<script>
    /*
    * Vuex辅助函数
    * 使用辅助函数先要引入
    *     mapState
    *     mapGetters
    *     mapMutations
    *     mapActions
    * */
    //使用ES6结构赋值的方式引入Vuex辅助函数
    import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
    export default {
        name: "increment",
        /*
        * 注意: 要让store中的数据响应的显示，必须写在computed计算属性中
        * 写在data中不会响应的改变
        * */
        data(){
          return {
            n : this.$store.state.count
          }
        },
        /*computed : {
          num(){
            return this.$store.state.count;          //通过 this.$store.state.count 拿到vuex中的数据
          },
          num2(){
            return this.$store.getters.filterCount;  //获取getters中的filterCount的值
          }
        },*/

        /*
        * 通过 mapState mapGetters取属性
        *       通过ES6扩展运算符的方式
        *        computed : {
        *            ...mapState({
                          num : state => state.count  //写法一
                          num : 'count'               //写法二
                          num(state){                 //写法三 做进一步处理
                             return state.count + 100
                           }
                        }),
                  }
                  computed : {
                    ...mapState(['count'])            //写法四 通过结构赋值直接拿到对应的数据
                  }
        * */
        computed : {
          test(){
            return 123;
          },
          ...mapState(['count']),
          ...mapGetters({
            num2 : 'filterCount'
          })
        },
       /* methods : {
          addHandle(){
            /!*
            * 改变 store中的状态需要提交一个 mutation, 通过commit提交指定的mutation
            * commit第二个参数是传递的实参 一般为对象形式, 也可以通过传递对象的方式提交
            * *!/
            //this.$store.commit('addIncrement', {n : 5})

           /!*
            触发一个action
            通过 dispatch
            *!/
           this.$store.dispatch('addAction', {n : 5})
          },
          deHandle(){
            //传递对象的方式提交 mutation
            this.$store.commit({
              type : 'deIncrement',
              n : 10
            })
          }
        }*/

       /*
       * 通过 mapMutations mapActions提交
       *      key 事件对应的函数名称  value 触发mutations或者actions中的哪个函数
       *      mapMutations({
                  key : value
              })
              这时候需要传参过去的话需要在行间里面直接传参  @click="addHandle({ n:5 })"
       * */
        methods : {
          ...mapMutations({
              deHandle : 'deIncrement'
          }),
          ...mapActions({
              addHandle : 'addAction'
          })
        }
    }
</script>

<style scoped>

</style>
