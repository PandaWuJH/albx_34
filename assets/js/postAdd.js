$(function () {
  // 先获取所有分类渲染
  $.ajax({
    type: "get",
    url: "/getCateList",
    dataType: "json",
    success: function (res) {
      var htmlStr = template("tmp", res)
      $("#category").html(htmlStr);
    }
  })
  // 初始化富文本框：创建一个富文本框覆盖指定id号的textarea
  CKEDITOR.replace("content");
  // 实现前端上传文件
  // 一旦点击文件就开始上传，change事件
  $("#feature").on("change", function () {
    // 上传文件需要用FormData把数据转换为二进制
    var formdata = new FormData();
    //获取当前文件对象，下面两个方法都可以
    //  var file=document.querySelector("#feature").files[0];
    var file = this.files[0];
    var formdata = new FormData();
    formdata.append('img', file);
    // 发起ajax请求
    $.ajax({
      type: "post",
      url: "/uploadFile",
      // 把formdata准备好的数据发送
      data: formdata,
      dataType: "json",
      processData: false,
      contentType: false,
      success: function (res) {
        
      }
    })
  })
})