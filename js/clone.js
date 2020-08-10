// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
function clone(obj){
  let cloneObj = Array.isArray(obj) ? [] : {}
  if(obj && typeof obj === "object"){
    for(let i = 0; i < obj.length; i++){
      if(obj[i] && typeof obj[i] === "object"){
        cloneObj[i] = clone(obj[i])
      }else{
        cloneObj[i] = obj[i]
      }
    }
  }
  return cloneObj
}

// * ---------------- 实现的效果：

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
