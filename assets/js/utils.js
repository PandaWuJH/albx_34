   function convertToObj(str){
    str = str.slice(1) // 先将?截掉
    var arr = str.split('&')
    // console.log(arr);
    // 循环遍历数组,获取每一项,再以'='切割
    var obj = {}
    arr.forEach(function(item,index){
      var temp = item.split('=')
      // console.log(temp);
      obj[temp[0]] = temp[1]  //  可以使用.或[]的方式给对象添加属性
      // console.log(obj);
    })
    return obj;
  } 
