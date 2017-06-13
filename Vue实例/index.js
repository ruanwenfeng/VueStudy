/*
 * @Authors wkky (791113844@qq.com)
 * @Date    2017-06-13 20:01:07
*/
var data = { a: 1 }
var vm = new Vue({
  data: data
})
console.log("vm.a === data.a : "+(vm.a === data.a)); // -> true
// 设置属性也会影响到原始数据
vm.a = 2;
console.log(data.a); // -> 2
// ... 反之亦然
data.a = 3
console.log(vm.a); // -> 3

// 实例生命周期