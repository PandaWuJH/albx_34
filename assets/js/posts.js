$(function(){
  var pageNum=1;
  var pageSize=2;
 
  init({})
  function init(query){
    $.ajax({
    type:"get",
    url:"/getAllArticle",
    data:{
      pageNum:pageNum,
      pageSize:pageSize,
      ...query
    },
    dataType:"json",
    success:function(res){
      // console.log(res);
      var htmlStr= template("tmp",res.data)
      $("tbody").html(htmlStr);
      // 调用设置分页结构函数
      // var count=Math.ceil(res.data.data1/pageSize);
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
            init({})
        }
    })
}
// 前端发送获取所有分类数据请求并显示在页面
  $.ajax({
    type:"get",
    url:"/getCateList",
    dataType:"json",
    success:function(res){
      
      var htmlStr='<option value="all">所有分类</option>'+template("select",res);
      $(".selectCate").html(htmlStr)
    }
  })
  // 筛选功能，为按钮添加点击事件
  $("#btn").on("click",function(evevt){
    console.log(123);
    // 阻止默认刷新行为
    var query={};
    event.preventDefault();
      if($(".selectCate").val()!="all"){
        query.cate=$(".selectCate").val();
      }
      if($(".selectStutas").val()!="all"){
        query.status=$(".selectStutas").val();
        console.log(query);
      }
      init(query);
  })
  // 根据id删除文章
  $("tbody").on("click",".btndel",function(){
    var id=$(this).data("id");
    alert(id)
    $.ajax({
      type:"get",
      url:"/delArtById",
      dataType:"json",
      data:{
        id:id
      },
      function (res) {
        
      }
    })
  })
})