import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import {
  Menu, 
  Col, 
  Row, 
  Icon,
  Input
} from 'ant-design-vue'

Vue.use(Menu)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Input)


// Vue.component("Col", Col);
// Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
