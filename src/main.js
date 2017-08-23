// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/index.js'
import VueUp from 'vueup'

require('minireset.css')
require('./css/app.css')

Vue.use(VueUp)

Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0)
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
