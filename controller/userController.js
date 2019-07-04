const model=require("../model/model.js")
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
  }
}