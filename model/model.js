// 引入mysql数据库模块
var mysql = require("mysql");
// 创建连接
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'baixiu'
});

// 准备sql语句
module.exports = {
  // 获取所有文章信息
  getAllArticle(get, callback) {
    // console.log(typeof get.cate);
    var str = `
    select posts.id as pid,posts.slug,posts.title,posts.created,posts.status,users.nickname,users.id as uid,categories.id,categories.name
    from posts
    inner join users on users.id=posts.user_id
    inner join categories on categories.id=category_id
    where 1=1
    `
    if(get.cate){
    str+=` and posts.category_id=${get.cate}`
    }
    if(get.status){
      str+=` and posts.status='${get.status}' `
    }
    
      str+=` order by posts.id desc
        limit ${(get.pageNum-1)*(get.pageSize)},${(get.pageSize)}
      `
    
    conn.query(str, (err, results) => {
      if (err) {
        callback(err)
      } else {
        console.log(results);
        //获取数据库posts表中的总记录数
        var sql="select count(*) as cnt from posts";
        conn.query(sql,(err1,data1)=>{
          if (err1) {
            callback(err1)
          } 
          else{        
            callback(null,{results:results,data1:data1[0].cnt})
          }
        })
      }
    })
  },
  // 读取数据库用户信息
  login(email,callback){
    var sql=`SELECT * from users where users.email="${email}"`;
    conn.query(sql,(err,results)=>{
      if(err){
        callback(err)
      }else{
        callback(null,results)
      }
    })
  },

  // 获取所有分类数据
  cateController(callback){
    var sql="select * from categories";
    conn.query(sql,(err,results)=>{
      if(err){
        callback(err)
      }else{
        callback(null,results)
      }
    })
  },
  // 根据id删除文章
  delArtById(id,callback){
    var sql="delete from posts where id="+id;
    conn.query(sql,(err,results)=>{
      if(err){
        callback(err)
      }else{
        callback(null)
      }
    })
  }
  //根据id获取对应用户信息
//   getInfoById(id,callback){
//     var sql="select * from users where id=?";
//     conn.query(sql,[id],(err,results)=>{
//       if(err){
//         callback(err)
//       }else{
//         callback(null,results)
//       }
//     })
//   }
 }
