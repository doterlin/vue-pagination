import Vue from 'vue'
import App from '../../../component/App2.vue'
//Vue.config.silent = true;
var app = window.vueApp = new Vue({
	data: {
		toastMsg: ''
	},
	el: '#app',
	render: h => h(App),
	mounted() {
		
	}
})
