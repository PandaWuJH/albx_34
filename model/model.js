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
  getAllArticle(get, callback) {
    var str = `
    select posts.id,posts.slug,posts.title,posts.created,posts.status,users.nickname,users.id,categories.id,categories.name
    from posts
    inner join users on users.id=posts.user_id
    inner join categories on categories.id=category_id
    limit ${(get.pageNum-1)},${(get.pageSize)}
    `
    conn.query(str, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }

    })
  }
}