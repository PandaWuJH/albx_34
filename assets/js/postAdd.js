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
  // ?id=10&name='tom'
  var obj = {};
  var str=[]
  var str = location.search.slice(1);
  console.log(str);
  str=str.split("&");
  console.log(str);
  // str=str.split("=");
  //  ["id=10", "name=tom"]

  for (var i = 0; i < str.length; i++) {
    str=str[i].split("=");
    console.log(str);
    obj[str[0]] = str[1]
    console.log(obj);
  };
  console.log(Number(obj.id));
  var id=Number(obj.id);
  console.log(id);
  if (id) {
    $.ajax({
      type: "get",
      url: "/getArcById",
      data:{id:id},
      dataType: "json",
      success: function (res) {
        console.log(res);
        $("#title").val(res.data.title)
        $("#content").val(res.data.content)
        $("#slug").val(res.data.slug)
        $("#category").val(res.data.category_id)
        $("#created").val(res.data.created)
        $(".thumbnail").attr("src",res.data.feature).show()
        $("#status").val(res.data.status)
      }
    })
  }


  // 初始化富文本框：创建一个富文本框覆盖指定id号的textarea
  CKEDITOR.replace("content");
  // CKEDITOR.instances.content.getData(); //获取值

  // 实现前端上传文件
  // 一旦点击文件就开始上传，change事件
  $("#feature").on("change", function () {
    var file = this.files[0];
    
    // 上传文件需要用FormData把数据转换为二进制
    var formdata = new FormData();
    //获取当前文件对象，下面两个方法都可以
    //  var file=document.querySelector("#feature").files[0];
    
    console.log(file);
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
        $(".upLoadFile").val("/uploads/"+res.img);
        $(".thumbnail").attr("src","/uploads/"+res.img).show()
      }
    })
  })
  // 给新增文章添加点击按钮事件
  $(".addArc").on("click", function () {
    var aaa = $("#addArc").serialize();
    console.log(aaa);
    console.log(typeof aaa)
    CKEDITOR.instances.content.updateElement() //同步数据
    // console.log(123);
    $.ajax({
      type: "post",
      url: "/addArc",
      data: $("#addArc").serialize(),
      dataType: "json",
      success: function () {
        // location.href="posts"
      }
    })
  })
  // 给编辑文章按钮添加点击事件,事件委托
  $("tbody").on("click", ".btn-editor", function () {

  })
})