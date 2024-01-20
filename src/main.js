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
  Input,
  Card,
  Avatar,
  Divider,
  List
} from 'ant-design-vue'

Vue.use(Menu)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Avatar)
Vue.use(Card)
Vue.use(Divider)
Vue.use(List)


// Vue.component("Col", Col);
// Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
