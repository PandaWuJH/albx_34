// 引入express框架
const express=require("express");
// 创建实例对象
const app=express();
const bodyParser=require("body-parser")
//监听端口
app.listen(3005,()=>{
  console.log("http://127.0.0.1:3005");
})
// 引入router模块
const router=require("./router/index.js")
// 托管静态资源
app.use("/assets",express.static("assets"));
app.use('/uploads', express.static('uploads'))
// 引入ejs模板
const ejs=require("ejs");
// 设置模板引擎为ejs
app.set("view engine","ejs");
// 设置ejs默认目录
app.set("views","./views");
// 使用中间件在当前应用上挂载路由配置
app.use(router);