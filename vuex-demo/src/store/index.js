import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

/*
*
* 划分模块 modules
*
*     定义一个module
*     let Increment = {
*        state :{},
*        mutations :{},
*        actions , {}
*     }
*
*     在store容器中划分模块
*     new Vuex.Store({
*        state :{},
*        mutations :{},
*        actions , {},
*        modules : {
*           Increment
*        }
*     }）
*
*     只有 state 取值的时候加上模块的名字;
*               使用 this.$store.state.Increment.title
                或者  computed : {
                        ...mapState({
                          num : state => state.Increment.num
                        })
                      }

       mapGetters(this.$store.getters.getNum),和 提交的时候(mapMutations,mapActions)不需要写模块的名字,和普通的提交一样
* */

let Increment = {
    state : {
      num : 100,
      isShow : true
    },
    getters : {
        getNum(state){
          return state.num - 20;
        }
    },
    mutations : {
      addNum(state){
        state.num ++;
      },
      deNum(state){
        state.num --;
      }
    }
  }

let store = new Vuex.Store({
    state : {
      title : '',
      isShow : false,
      list : []
    },
     mutations : {
       changeTitleMutations(state, payload){
        state.title = payload.title;
        state.isShow = !state.isShow
      },
       changeShowMutations(state){
         state.isShow = !state.isShow
       },
       changeList(state, list){
         state.list = list;
       }
    },
    actions : {
      getList(context){
        //通过axios获取数据
        axios.get('https://easy-mock.com/mock/5add8e9c94ed9e03b490c9c0/example/list')
          .then(data=>{
            console.log(data);
            context.commit('changeList', data.data)
          })
          .catch(error=>{
            console.log(error)
          })
      }
    },
    modules : {
      Increment
    }
})

export default store
