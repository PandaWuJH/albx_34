const model = require("../model/model.js")
// const querysting=require("querysting")
module.exports = {

  login(req, res) {
    var email = req.body.email;
    var pwd = req.body.password;
    // { email: '54266828@qq.com', password: '123' }
    // console.log(email);
    model.login(email, (err, results) => {
      // console.log(err);
      // console.log(results);
      if (err) {
        // 数据库异常，无法查询
        res.json({
          code: 1,
          msg: '邮箱不存在'
        })
      }
      // 查询成功，有可能有数据，有可能为空数组
      else {
        // 判断为有数据时
        if (results[0]) {
          if (pwd == results[0].password) {
            res.writeHead(200,{
              // 将登录成功时的状态写入cookie
              "set-cookie":"islogin=true"
            })
            res.end(JSON.stringify({
              code: 0,
              msg: '验证通过'
            }))
          } else {
            res.json({
              code: 2,
              msg: '密码错误'
            })
          }
        }else{
          res.json({
            code: 1,
            msg: '邮箱不存在'
          })
        }
      }
    })
  }
}