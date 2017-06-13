/*
 * @Authors wkky (791113844@qq.com)
 * @Date    2017-06-13 20:17:17
*/
window.onload = function(){
// 插值
	// 插值 文本
	var app1 = new Vue({
		el:"#app1",
		data:{
			msg :"插值文本"
		}
	});
	var app2 = new Vue({
		el:"#app2",
		data:{
			msg :"插值文本<h1>输出html</h1> html标签不起作用"
		}
	});
	// 插值 html
	var app3 = new Vue({
		el:"#app3",
		data:{
			rawHtml :"<h1>输出html</h1> <p style='color:red;'>html标签起作用</p>"
		}
	});

	var cls1 = new Vue({
		el:".cls1",
		data:{
			id :"app4"
		}
	});
// 指令
	var app5 = new Vue({
		el:"#app5",
		data:{
			msg :"点击我"
		},
		methods:{
			doSomething:function(){
				alert(this.msg);
			}
		}
	});
// 过滤器
	var app6 = new Vue({
		el:"#app6",
		data:{
			msg :"原始值"
		},
		filters: {
		    filter: function (value) {
		      alert(value);
		      return value+"	过滤了";
		    }
	  	}
	});
}