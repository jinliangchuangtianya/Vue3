import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
//import Layout from '@/views/layout'
//import Project from '@/views/backend/Project'
//import Doc from '@/views/backend/Doc'
//import Workbench from '@/views/backend/Workbench'
import Sildecontent from '@/views/backend/docviews/Sildecontent'


/*
* 利用Vue 异步组件,结合webpack提供的require.ensure代码分割,实现按需加载js(组件)文件
*     require.ensure参数：([]依赖, ()=>{}回调函数, [chunk名字])
*     import函数 简写方式，注意不支持有第二个参数所以不能将多个文件打包成一个js文件
* */
let Layout = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('@/views/layout'));
  })
}
/*
* 利用import简写方式
* */
let Project = (resolve)=>{
  return import('@/views/backend/Project');
}
/*
 * 利用require.ensure函数的第三个参数 [chunk名字]，将Doc、Workbench打包成一个js文件
 */
let Doc = (resolve)=>{
  return require.ensure([], ()=>{
    resolve(require('@/views/backend/Doc'))
  },'abc')
}
let Workbench = (resolve)=>{
  return require.ensure([], ()=>{
    resolve(require('@/views/backend/Workbench'))
  },'abc')
}

Vue.use(Router)

let router =  new Router({
  mode : 'history',   //注意IE9不支持history模式
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/management',
      name : 'Management',
      component: Layout,
      children : [
        {
          path: '/project',
          name: 'Project',
          component: Project,
          meta : {
            login: true
          }
        },
        {
          path: '/doc',
          component: Doc,
          children:[
            {
              path : '',
              name : 'Doc',
              component : Sildecontent,
              meta : {
                login: false
              },
            }
          ]
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench,
          meta : {
            login: true
          }
        }
      ]
    },
    {
      path:'/login',
      name : 'Login',
      component : Login
    },
    {
      path:'*',
      redirect : '/'
    },
  ],

})

router.beforeEach((to, from, next)=>{
  //console.log(to);
  /*
  * 判断父路由和当前路由是否都需要登录
  * to.matched 父路由和当前路由的的数组
  * some 方法用来循环数字中的每一项，只要有一项返回true，那么结果就为true
  * */
  console.log(to.matched.some((item)=>item.meta.login));

  if(to.matched.some((item)=>item.meta.login)){
    /*
    当前的this指向的事当前的文件,不是Vue实例
    通过router实例下的app属性，指向的就是Vue的根实例
    */
    let userInfo = router.app.$local.fetch('user');
    userInfo && userInfo.login ? next(true) : router.push({path:'/login', query : {redirect : to.path.slice(1)}})
  }
  else{
    next(true)
  }

})
export default router;

