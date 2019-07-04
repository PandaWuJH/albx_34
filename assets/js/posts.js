$(function(){
  var pageNum=1;
  var pageSize=2;
  init()
  function init(){
    $.ajax({
    type:"get",
    url:"/getAllArticle",
    data:{
      pageNum:pageNum,
      pageSize:pageSize
    },
    dataType:"json",
    success:function(res){
      console.log(res);
      var htmlStr=template("tmp",res.data)
      $("tbody").html(htmlStr);
      // 调用设置分页结构函数
      var count=Math.ceil(res.data.data1/pageSize);
      // console.log(count);
      setPage(Math.ceil(res.data.data1/pageSize))
    }
  })
  }
  function setPage(count) {
    $(".pagination").bootstrapPaginator({
        //设置版本号
        bootstrapMajorVersion: 3,
        // 显示第几页：会添加对应的样式
        currentPage: pageNum,
        // 总页数:当前数据表的记录总数 / 每页所显示的记录数
        totalPages: count,
        //当单击页码按钮的时候, 执行该函数, 调用ajax渲染页面
        onPageClicked: function (event,originalEvent,type,page) {
            console.log(page)
            // 我们发现，这个page就是当前的合理页码值，我们只需要将全局的pagenum重置，并且重新获取数据就可以了
            pageNum = page
            // 重新获取数据
            init()
        }
    })
}
})