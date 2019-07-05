import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
import router from './plugins/router.js'
import store from './plugins/store.js'
import axios from './plugins/axios.js'
import './assets/css/public.css'

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
