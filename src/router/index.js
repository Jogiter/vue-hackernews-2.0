import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    base: '/',
    mode: 'history',
    routes: [{
            path: '/index',
            name: 'Index',
            component: function(resolve) {
                require(['@/pages/Index.vue'], resolve)
            }
        }
        , {
            path: '/matron',
            name: 'Matron',
            component: function(resolve) {
                require(['@/pages/Matron.vue'], resolve)
            }
        }, {
            path: '/matron/:id',
            name: 'MatronDetail',
            component: function(resolve) {
                require(['@/pages/matron-detail.vue'], resolve)
            }
        }, {
            path: '/nursery',
            name: 'Nursery',
            component: function(resolve) {
                require(['@/pages/Nursery.vue'], resolve)
            }
        }, {
            path: '/nursery/:id',
            name: 'NurseryDetail',
            component: function(resolve) {
                require(['@/pages/matron-detail.vue'], resolve)
            }
        }, {
            path: '/parenting',
            name: 'Parenting',
            component: function(resolve) {
                require(['@/pages/Parenting.vue'], resolve)
            }
        }, {
            path: '/parenting/article/:id',
            name: 'ArticleDetail',
            component: function(resolve) {
                require(['@/pages/article-detail.vue'], resolve)
            }
        }, {
            path: '/join',
            name: 'Join',
            component: function(resolve) {
                require(['@/pages/Join.vue'], resolve)
            }
        }, {
            path: '/about',
            name: 'About',
            component: function(resolve) {
                require(['@/pages/About.vue'], resolve)
            }
        }, {
            path: '*',
            redirect: '/index'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
