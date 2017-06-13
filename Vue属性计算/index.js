/*
 * @Authors wkky (791113844@qq.com)
 * @Date    2017-06-13 21:01:08
*/
window.onload = function(){
	window.app1 = new Vue({
	  el: '#app1',
	  data: {
	    message: 'Hello'
	  },
	  computed: {
	    reversedMessage: function () {
	      return this.message.split('').reverse().join('')
	    }
	  }
	});
	window.app2 = new Vue({
	  el: '#app2',
	  data: {
	    firstName: 'Foo',
	    lastName: 'Bar',
	    fullName: 'Foo Bar'
	  },
	  watch: {
	    firstName: function (val) {
	      this.fullName = val + ' ' + this.lastName
	    },
	    lastName: function (val) {
	      this.fullName = this.firstName + ' ' + val
	    }
	  }
	})

	window.app3 = new Vue({
	  el: '#app3',
	  data: {
	    firstName: '阮',
	    lastName: '文峰'
	  },
	  computed: {
	    fullName: {
		    get: function () {
		      return this.firstName + ' ' + this.lastName
		    },
		    set: function (newValue) {
		      var names = newValue.split(' ')
		      this.firstName = names[0]
		      this.lastName = names[names.length - 1]
		    }
	  	}
	  }
	})


	var app4 = new Vue({
	  el: '#app4',
	  data: {
	    question: '',
	    answer: 'I cannot give you an answer until you ask a question!'
	  },
	  watch: {
	    // 如果 question 发生改变，这个函数就会运行
	    question: function (newQuestion) {
	      this.answer = 'Waiting for you to stop typing...'
	      this.getAnswer()
	    }
	  },
	  methods: {
	    // _.debounce 是一个通过 lodash 限制操作频率的函数。
	    // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
	    // ajax请求直到用户输入完毕才会发出
	    getAnswer: _.debounce(
	      function () {
	        var vm = this
	        if (this.question.indexOf('?') === -1) {
	          vm.answer = 'Questions usually contain a question mark. ;-)'
	          return
	        }
	        vm.answer = 'Thinking...'
	        window.fetch('https://yesno.wtf/api')
	          .then(function (response) {
				response.json().then(function(data){
					vm.answer = data.answer;
				})
	          })
	          .catch(function (error) {
	            vm.answer = 'Error! Could not reach the API. ' + error
	          })
	      },
	      500
	    )
	  }
	})
}