$(function(){
  // 获取当前页面完整路径
  var url=location.href;
  var num1=url.lastIndexOf("/")+1;    
  var num2=url.lastIndexOf("?");
  // console.log(num2);
  if(num2>-1){
    var url=url.slice(num1,num2);
  }else{
    var url=url.slice(num1);
  }
  // console.log(url);
  if(url=="posts"||url=="post-add"||url=="categories"){
    $("#menu-posts").addClass("in");
    $("#menu-posts").attr("aria-expanded",true);
  }
   $("li").remove("active")
   $("#"+url).addClass("active");
   if(url=="nav-menus"||url=="slides"||url=="settings"){
    $("#menu-settings").addClass("in");
    $("#menu-settings").attr("aria-expanded",true);
   }
})
