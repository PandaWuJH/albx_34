const model=require("../model/model.js")
const path=require("path")
// 引入第三方formidable模块
var formidable = require('formidable')
module.exports={
  getInfoById(req,res){
    let id=req.query.id;
    console.log(id);
    model.getInfoById(id,(err,results)=>{
      if (err) {
        res.json({
          code: 1,
          msg: '读取失败'
        })
      } else {
          res.json({
            code: 0,
            msg: '读取成功',
            data:results,
          })    
      }
    })
  },
  // 根据id删除文章
  delArtById(req,res){
    var id=req.query.id;
    console.log(id);
    model.delArtById(id,(err)=>{
      if(err){
        // console.log(err);
        res.json({
          "code":1,
          "msg":"删除失败"
        })
      }else{
        res.json({
          "code":0,
          "msg":"删除成功"
        })
      }
    })
  },
  // 上传文件接口
  uploadFile(req,res){
    //引入第三方模块formidable实现文件上传
    // 创建文件上传对象
    var form = new formidable.IncomingForm();
    // 设置编码，不仅可以实现文件上传，还可以实现普通参数的传递（键值对）
    form.encoding = 'utf-8';
    // 设置文件上传服务器路径
    form.uploadDir =__dirname+"/../uploads";
    console.log(__dirname);
    console.log(form.uploadDir);
    // 设置保留文件扩展名
    form.keepExtensions=true;
    // form.parse(请求报文对象，上传完成时的回调函数)
    form.parse(req,(err,fields,files)=>{
      if(err){
        res.json({
          code:1,
          msg:"上传失败"
        })
      }else{
        var filename=path.basename(files.img.path)
        res.json({
          code:0,
          msg:"上传成功",
          img:filename
        })
      }
    })
  }
}