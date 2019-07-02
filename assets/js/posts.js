$(function(){
  $.ajax({
    type:"get",
    url:"/getAllArticle",
    data:{
      pageNum:1,
      pageSize:2
    },
    dataType:"json",
    success:function(res){
      var htmlStr=template("tmp",res)
      $("tbody").html(htmlStr);
    }
  })
})