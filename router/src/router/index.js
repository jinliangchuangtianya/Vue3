import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Document from '@/components/Document';
import User from '@/components/User';
import Login from '@/components/Login';
import Study from '@/components/vues/Study';
import Work from '@/components/vues/Work';
import Hobby from '@/components/vues/Hobby';
import Slider from '@/components/vues/Slider';
import Nofound from '@/components/404';

//注册路由为插件
Vue.use(Router);

/*
  配置路由
  生成实例并暴露

  mode 改变模式 默认hash
  linkActiveClass 设置选中的类名
  path : '*' 通配符，如果目标页面不存在就匹配 *
  alias 路由别名 注意router-link的状态不能激活
  redirect 重定向
  children 配置子路由
  component 组件
  components 对应显示多个组件 key值就是router-view的name
  matched 包含父路由和当前路由的元信息
  meta 路由元信息

  scrollBehavior(to, from, savePosition) 再点击浏览器前进后退或切换导航时触发
  to 要进入的目标路由对象
  from 离开的路由对象
  savePosition 再点击浏览器前进后退的时候记录滚动条的坐标
  return 返回记录的滚动坐标 或者通过hash定位到指定的位置
  path : '/user/:userId?' 动态路径   userId?正则匹配 可以出现0次活一次

 */
let router = new Router({
  mode : 'history',
  linkActiveClass : 'is-active',
  scrollBehavior(to, from, savePosition){
    /*console.log(to);
    console.log(from);
    console.log(savePosition);*/
    /* if(savePosition){
       return savePosition;
     }
     else{
       return {x : 0, y : 0};
     }*/
    /* if(to.hash){
       return {
         selector : to.hash
       };
     }*/
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias : '/index',
      meta : {
        index : 0,
        title : 'home'
      }
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default : About,
        slider : Slider
      },
      meta : {
        index : 1,
        login : true,
        title : 'about'
      }
    },
    {
      path: '/document',  //有默认子路由的情况下不能设置name
      component: Document,
      children : [
        {
          path : '',      //设置默认的子路由  /document
          name : 'document',
          component : Study,
          meta : {
            index : 2,
            title : 'document'
          },
        },
        {
          path : 'work',   //  /document/work  加上/就变成根路径  /work
          name : 'work',
          component : Work
        },
        {
          path : 'hobby',
          name : 'hobby',
          component : Hobby
        }
      ]
    },
    {
      path : '/login',
      name : 'login',
      component : Login,
      meta : {
        title : 'login'
      }
    },
    {
      path : '/user/:tip?/:userId?',
      name : 'user',
      component : User,
      beforeEnter(to, from, next){
        console.log('user路由的导航钩子函数');
        next();
      },
      meta : {
        index : 3,
        title : 'user'
      }
    },
    {
      path: '*',
      //component: Nofound
      //重定向  redirect : '/home'; or redirect : {path:'/home'}; or redirect : {name:'home'}
      //redirect : '/home'
      /*
        动态设置重定向的目标
        to 目标路由对象
        return 目标路由
       */
      redirect : (to) => {
        //console.log(to);
        if(to.path == '/123'){
          return '/';
        }
        else if(to.path == '/456'){
          return {path : '/about'};
        }
        else{
          return {name : 'document'};
        }
      }
    }
  ]
})

/*
  导航钩子函数  router实例下的钩子函数是全局的,     router.beforeEach afterEach
  如果需要单独路由里设置导航钩子函数需要再路由配置里设置  /uesr路由的beforeEnter afterEnter

  组件里设置导航钩子函数需要在.vue组件的配置里设置    Document.vue组件中的配置
      beforeRouteEnter  进入当前组件之前执行的导航钩子函数
      beforeRouteUpdate 当前组件的导航更新之前触发的导航钩子函数
      beforeRouteLeave 离开当前组件之前触发的导航钩子函数
      在组件里面执行导航钩子函数时候需要注意beforeRouteEnter执行的时候组件还没有被创建,所以函数里面的this是undefined;可以再next函数中
      添加一个回调函数,同时回调中接收一个参数,参数即当前组件的实例vm

  beforeEach 进入目标导航之前执行的导航钩子函数
      to 目标导航的路由信息对象
      from 离开导航的路由信息对象
      next 执行函数 是否进入导航 参数为false取消导航

  afterEach 进入导航之后执行的导航钩子函数
      to 相同
      from 相同
*/


/*router.beforeEach((to, from, next)=>{
  console.log('beforeEach')
  //next(false);  //取消导航
  /!*
    导航到about的时候判断用户是否登录,如果为登录(meat.login == true),重定向到login页
    通过about的meat信息判断
  *!/
  if(to.meta.login){
    next('/login')
  }
  else{
    next();
  }
})
router.afterEach((to, from)=>{
  console.log('afterEach')
  /!*
    导航到不同页面之后，通过目标导航的meta信息改变页面的title
  *!/
  if(to.meta.title){
    //document访问不到,必须加上window
    window.document.title = to.meta.title
  }
})*/

export default router;
