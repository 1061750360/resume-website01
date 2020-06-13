import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
//导入字体图标
import './assets/iconfonts/iconfont.css'
// 导入 animate.css
import 'animate.css/animate.min.css'

Vue.use(VueFullPage);


// 导入样式文件
import './assets/css/main.less'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
