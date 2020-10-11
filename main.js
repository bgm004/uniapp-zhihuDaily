import Vue from 'vue'
import App from './App'

import API from './utils/api.js'

Vue.config.productionTip = false
Vue.prototype.$API = API

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
