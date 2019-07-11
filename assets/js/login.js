$(function(){
  $(".login-wrap").on("submit",function(event){
    var email=$("#email").val();
    var password=$("#password").val();
    console.log(email,password);
    event.preventDefault();
    $.ajax({
      type:"post",
      url:"/login",
      data:$(".login-wrap").serialize(),
      dataType:"json", 
      beforeSend:function(){
        // 544268828@qq.com
        if(!/\w+[@]\w+[.]\w+/.test(email)){
          $(".alert-danger span").text("邮箱不合法");
            $(".alert-danger").show(1000).delay(2000).hide(1000);
            return false;
        }
        if(password.trim().length==0){
          $(".alert-danger span").text("密码不能为空");
          $(".alert-danger").show(1000).delay(2000).hide(1000);
          return false;
        }
      },
      success:function (res) {
        if(res.code==0){    
            console.log("验证通过");
             location.href="/admin/index"
        }else if(res.code==1){
          $("#loginErr").text("用户名不存在").show();
          $(".login").hide();
        }else if(res.code==2){
          $("#loginErr").text("密码错误，请重新输入").show();
          $(".login").hide();
        }      
      }
    })
  })
})