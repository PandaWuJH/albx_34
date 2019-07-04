const model = require("../model/model.js")
module.exports = {

  login(req, res) {
    var user = req.body;
    var flag = 1;
    console.log(user);
    model.login(user, (err, results) => {
      console.log(err);
      console.log(results);
      if (err) {
        res.json({
          code: 1,
          msg: '读取失败了'
        })
      } else {
        results.some(function (item, index) {
          if (item.email == user.email && item.password == user.password) {
            flag = 0;
            res.json({
              code: 000,
              msg: "验证通过",
              data:item,
            })     
            return ;
          }
        });
        if (flag) {
          res.json({
            code: 111,
            msg: '验证失败'
          })
        }
      }
    })
  }
}