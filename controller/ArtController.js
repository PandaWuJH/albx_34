const model=require("../model/model.js");
const moment=require("moment");
module.exports={
  getAllArticle(req,res){
    let get=req.query;
    console.log(get);
    // 调用model里的getAllArticle方法，传进回调函数
    model.getAllArticle(get,(err,results)=>{
      if(err) res.json({
        code:1,
        msg:"获取失败"
      })   
      else{
        for(var i=0;i<results.results.length;i++){
          results.results[i].created=moment(results.results[i].created).format("YYYY-MM-DD HH:mm:ss ")
      }
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