// 引入express框架
const express=require("express");
// 创建实例对象
const app=express();
// 引query模块
const querystring=require("querystring");
// 引入session模块
const session=require("express-session");


const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({ extended: false })) ;
//监听端口
app.listen(3005,()=>{
  console.log("http://127.0.0.1:3005");
})
// 引入router模块
const router=require("./router/index.js")
// 托管静态资源
app.use("/assets",express.static("assets"));
app.use('/uploads', express.static('uploads'))
// 用cookie状态保持
// app.use(function(req,res,next){
//   var cookie=querystring.parse(req.headers.cookie)
//   if(cookie.islogin&&cookie.islogin=="true"||req.url=="/admin/login"||req.url.indexOf("/admin")==-1){
//       next();
//   }else{
//     res.redirect("/admin/login")
//   }
// })
// 用session状态保持
app.use(session({
  //name: 'hhw',
  // 对session加密：加盐，可以设置一个只有你自己知道的字符串
  //  md5加密
  secret: '加什么都没有所谓',
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: false,
  //强制“未初始化”的会话保存到存储。 
  saveUninitialized: false,

}))
app.use(function(req,res,next){
  
  if(req.session.islogin&&req.session.islogin=="true"||req.url=="/admin/login"||req.url.indexOf("/admin")==-1){
    next();
  }else{
    res.redirect("/admin/login")
  }
})

// 引入ejs模板
const ejs=require("ejs");
// 设置模板引擎为ejs
app.set("view engine","ejs");
// 设置ejs默认目录
app.set("views","./views");
// 使用中间件在当前应用上挂载路由配置
app.use(router);

