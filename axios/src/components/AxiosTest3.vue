<template>
    <div>
      <h1>一起学习axios</h1>
    </div>
</template>

<script>

    /*
    *
    * 自定义请求实例 axios.create(config)
    *       baseUrl  基本路径
    *       timeout  请求超过指定时间就终止
    *       headers  设置请求头
    *       responseType 返回的数据类型
    *       params 配置查询字符串(添加在地址栏后面)
    *       transformRequest 转换请求数据 只适合PUT POST 和PATCH
    *                        对应类型是数组，数组里面的参数是一个函数, 函数的参数就是传递的数据
    *                        函数最终需要把数据 return 出去
    *                        默认的数据是json格式,通过系统自带的 queryString模块 转换成 a=1&b=hehe
    *                        最会需要&符链接,则需要再请求头中设置一下 content-type :
    *
    *       transformResponse 对请求返回的数据做进一步处理
    *                         需要把数据 return 出去
    *
    *       validateStatus 参数是当前请求的状态码，可以根据 return true(请求成功) 或者 return false(请求错误)来作为当前请求的结果
    *       cancelToken : source.token 取消请求
    *                         需要先创建取消请求令牌
    * */

    import axios from "axios"
    import queryString from "queryString"

    /*
   *
   * 创建取消请求令牌
   * let CancelToken = axios.CancelToken;
     let source = CancelToken.source();
   *
   * */

    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();

    let HTTP = axios.create({
        baseURL : " https://www.easy-mock.com/mock/5add8e9c94ed9e03b490c9c0/example",
        timeout : 100000,
        headers : {
          'custome-header' : 'miaov',
          'content-type' : 'application/x-www-form-urlencoded'
        },
        responseType : "json",
        params : {
          'book' : '123'
        },
        cancelToken : source.token
    })

    /*
    * 拦截请求(请求发送之前做一些事情)
    *       config axios配置信息
    *       必须 return config 才能继续发送请求
    * */
    HTTP.interceptors.request.use(function(config){
      //再发送请求之前做一些事
      console.log("拦截请求")
      return config
    },function(error){
      //请求错误时做一些事
      return Promise.reject(error)
    })

    /*
    * 拦截响应(再返回数据之前做一些事)
    *       data 返回的数据
    *       必须 return data 才能拿到数据
    * */
    HTTP.interceptors.response.use(function(data){
      //再返回数据之前做一些事
      console.log("拦截响应")
      //console.log(data)
      return data;
    })

    export default {
        name: "axios-test3",
        created(){

          /*
            axios.all([fun1, fun2])
          * 并发请求(一次性发送多个请求)
          *
          *        成功之后返回的是一个数组
          *        axios.all([http1(), http2()])
                    .then(response=>{
                       console.log(response)
                    })

             axios.spread(res1, res2) 分割返回的数据
                    axios.all([http1(), http2()])
                    .then(axios.spread((res1, res2)=>{
                        console.log(res1)
                        console.log(res2)
                    }))
          * */

          function http1(){
            return HTTP.get('list');
          }
          function http2(){
            return HTTP.post('axios-test')
          }

          axios.all([http1(), http2()])
          .then(axios.spread((res1, res2)=>{
              console.log(res1)
              console.log(res2)
          }))
          .catch(error=>{
            //判断是服务端的错误还是用户取消了请求
            if(axios.isCancel(error)){
              console.log(error.message);
            }
            else{
              console.log(error)
            }
          })
        }
    }
</script>

<style scoped>

</style>
