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
  }
}