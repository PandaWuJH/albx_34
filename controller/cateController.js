const model=require("../model/model.js")
module.exports={
  getCateList(req,res){
    model.cateController((err,results)=>{
      if(err)res.json({
        code:1,
        msg:"获取失败"
      })
      else{
        // console.log(results);
        res.json({
        code:0,
        msg:"获取成功",
        data:results,
      })
      }
      
    })
  }
}