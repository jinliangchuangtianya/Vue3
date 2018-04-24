/*
* 引入vue、vuex
* 注册组件
* */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
  定义一个容器 (唯一的)
    state 应用中的状态(数据)
    不能直接改变state中的状态,唯一的途径就是显示的提交 mutation
    mutations 唯一修改状态的事件回调函数，每个函数都接收一个 state 作为参数, 注意只能执行同步
    actions 包含异步操作,完成异步之后提交 mutation 每个函数都接收一个 context(对象) 作为参数，利用context.commit方法提交mutation
            context不是store实例,只是里面包含store实例下的方法
    getters 类似vue的computed(计算属性),对数据进行进一步的逻辑处理
            getters里的每一个函数会接收一个 state 作为参数
*/
let store = new Vuex.Store({
    state : {
        count : 100
    },
    getters : {
      filterCount(state){
        //判断 count 是否大于120
        return state.count >= 120 ? 120 : state.count;
      }
    },
    mutations : {
      addIncrement(state, payload){
        state.count += payload.n;
      },
      deIncrement(state, payload){
        state.count -= payload.n;
      }
    },
    actions : {
      addAction(context, payload){   //payload传过来的参数
        console.log(context);
        setTimeout(()=>{
          //提交mutation
          context.commit('addIncrement', payload);
          //可以利用context触发另一个actions
          context.dispatch('testAction', { test:'测试' });
        },2000)
      },
      testAction(context, payload){
        console.log(payload.test + ' 我被触发了');
      }
    }
})

/*导出实例*/
export default store
