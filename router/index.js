// 引入express框架
const express=require("express");
// 创建路由对象
const router=express.Router();
// 引入控制器模块,js文件互相引用要用相对路径
const controller=require("../controller/pagesContorller.js");
const ArtController=require("../controller/ArtController.js");
const loginController=require("../controller/loginController.js")
const userController=require("../controller/userController.js")
const cateController=require("../controller/cateController.js")
// 给router对象添加属性
// 获取前台index页面
router.get("/",controller.showIndexPage)
// 获取前台detail页面
router.get("/detail",controller.showDetailPage)
// 获取前台list页面
router.get("/list",controller.showListPage)
//获取后台Index页面
router.get("/admin/index",controller.showADIndexPage)
//获取后台categories页面
router.get("/admin/categories",controller.showADCategoriesPage)
//获取后台comments页面
 router.get("/admin/comments",controller.showADCommentsPage)
// //获取后台login页面
 router.get("/admin/login",controller.showADLoginPage)
// //获取后台nav-menus页面
 router.get("/admin/nav-menus",controller.showADNavMenusPage)
// //获取后台password-reset页面
 router.get("/admin/password-reset",controller.showADPasswordResetPage)
// //获取后台post-add页面
 router.get("/admin/post-add",controller.showADPostAddPage)
// //获取后台posts页面
 router.get("/admin/posts",controller.showADPostsPage)
// //获取后台profile页面
 router.get("/admin/profile",controller.showADProfilePage)
// //获取后台settings页面
 router.get("/admin/settings",controller.showADSettingsPage)
// //获取后台slides页面
 router.get("/admin/slides",controller.showADSlidesPage)
// //获取后台users页面
 router.get("/admin/users",controller.showADUsersPage)
//获取所有文章数据
router.get("/getAllArticle",ArtController.getAllArticle)
//获取登录路径
router.post("/login",loginController.login)
//根据id获取对应用户信息
router.get("/getInfoById",userController.getInfoById)
// 获取所有分类数据
router.get("/getCateList",cateController.getCateList)
// 根据id删除文章
router.get("/delArtById",userController.delArtById)
// 上传文件接口
router.post("/uploadFile",userController.uploadFile)
//新增文章接口
router.post("/addArc",userController.addArc)
// 根据id查找对应文章
router.get("/getArcById",userController.getArcById)
// 暴露router对象
module.exports=router;