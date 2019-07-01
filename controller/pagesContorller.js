// 引入module模块
const model=require("../model/model.js");
// 向外暴露业务逻辑函数
module.exports={
  // 读取前台主页面
  showIndexPage(req,res){
    res.render("index.ejs")
  },
  // 读取前台详细页面
  showDetailPage(req,res){
    res.render("detail.ejs")
  },
  // 读取前台列表页面
  showListPage(req,res){
    res.render("list.ejs")
  },
  // 读取后端index页面
  showADIndexPage(req,res){
    res.render("admin/index.ejs")
  },
  // 读取后端categories页面
  showADCategoriesPage(req,res){
    res.render("admin/categories.ejs")
  },
  // 读取后端comments页面
  showADCommentsPage(req,res){
    res.render("admin/comments.ejs")
  },
  // 读取后端login页面
  showADLoginPage(req,res){
    res.render("admin/login.ejs")
  },
  // 读取后端nav-menus页面
  showADNavMenusPage(req,res){
    res.render("admin/nav-menus.ejs")
  },
  // 读取后端password-reset页面
  showADPasswordResetPage(req,res){
    res.render("admin/password-reset.ejs")
  },
  // 读取后端post-add页面
  showADPostAddPage(req,res){
    res.render("admin/post-add.ejs")
  },
  // 读取后端posts页面
  showADPostsPage(req,res){
    res.render("admin/posts.ejs")
  },
  // 读取后端profile页面
  showADProfilePage(req,res){
    res.render("admin/profile.ejs")
  },
  // 读取后端settings页面
  showADSettingsPage(req,res){
    res.render("admin/settings.ejs")
  },
  // 读取后端slides页面
  showADSlidesPage(req,res){
    res.render("admin/slides.ejs")
  },
  // 读取后端users页面
  showADUsersPage(req,res){
    res.render("admin/users.ejs")
  },

}
