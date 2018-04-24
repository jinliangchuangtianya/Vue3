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
        timeout : 10000,
        headers : {
          'custome-header' : 'miaov',
          'content-type' : 'application/x-www-form-urlencoded'
        },
        responseType : "json",
        params : {
          'book' : '123'
        },
        transformRequest : [function(data){
          console.log(data);
          return queryString.stringify(data);
        }],
        transformResponse : [function(data){
            console.log("transformResponse")
            console.log(data)
            return data
        }],
        validateStatus(status){
          console.log(status)
          return true
        },
        cancelToken : source.token
    })

    export default {
        name: "axios-test2",
        created(){
          HTTP.post('axios-test', {a : 123, b : 'hehe'})
          .then(response=>{
            console.log(response.data)
          })
          .catch(error=>{
            //判断是服务端的错误还是用户取消了请求
            if(axios.isCancel(error)){
              console.log(error.message);
            }
            else{
              console.log(error)
            }
          })

          source.cancel("请求被用户取消了,因为请求时间太长了");   //主动取消请求
        }
    }
</script>

<style scoped>

</style>
