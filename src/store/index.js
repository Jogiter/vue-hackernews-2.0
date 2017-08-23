import Vue from 'vue'
import VueX from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueX)
Vue.use(VueResource)

let host = location.origin + '/website'
//let host = 'http://api.padmom.com/website'

let v = new Vue()
function ErrorHandle(res) {
    v.$popup({
         message: res.msg
    })
}

export default new VueX.Store({
    state: {
        articles: [], // 首页文章
        banner: [], // 轮播
        faq: [], // 常见问题
        recommended_nanny: [], // 月嫂
        recommended_nursemaid: [], // 育婴师
        category: [], // 育儿分类
        server: {}, // 选中服务人员信息
        article: {}, // 文章内容
    },
    getters: {
        articles: state => state.articles,
        banner: state => state.banner,
        faq: state => state.faq,
        recommended_nanny: state => state.recommended_nanny,
        recommended_nursemaid: state => state.recommended_nursemaid,
        category: state => state.category,
        server: state => state.server,
        article: state => state.article,
    },
    mutations: {
        setAll(state, payload) {
            state.articles = payload.articles
            state.banner = payload.banner
            state.faq = payload.faq
            state.recommended_nanny = payload.recommended_nanny
            state.recommended_nursemaid = payload.recommended_nursemaid
        },
        setCategory(state, payload) {
            state.category = payload
        },
        setArticle(state, payload) {
            state.article = payload
        },
        setServer(state, payload) {
            state.server = payload
        }
    },
    actions: {
        getAll({ commit }) {
            Vue.http.get(`${host}/home`).then(res => {
                if (res.body.code == 0) {
                    commit('setAll', res.body.data)
                } else {
                    ErrorHandle(res.body)
                }
            })
        },
        getCategory({ commit }, {
            id,
            pagesize,
            pageno
        }) {
            Vue.http.get(`${host}/category/${id}?page=${pageno}&per_page=${pagesize}`).then(res => {
                if (res.body.code == 0) {
                    commit('setCategory', res.body.data)
                } else {
                    ErrorHandle(res.body)
                }
            })
        },
        getArticle({ commit }, {
            id
        }) {
            Vue.http.get(`${host}/article/${id}`).then(res => {
                if (res.body.code == 0) {
                    commit('setArticle', res.body.data)
                } else {
                    ErrorHandle(res.body)
                }
            })
        },
        getPrice(context, payload) {
            Vue.http.post(`${host}/quatation`, payload.data, {
                emulateJSON: true
            }).then(res => {
                if (res.body.code == 0) {
                    payload.callback(res.body.data);
                } else {
                    ErrorHandle(res.body)
                }
            })
        },
        getServerInfo({ commit }, {
            id
        }) {
            Vue.http.get(`${host}/babysitter/${id}`).then(res => {
                if (res.body.code == 0) {
                    commit('setServer', res.body.data)
                } else {
                    ErrorHandle(res.body)
                }
            })
        },
        order(context, payload) {
            Vue.http.post(`${host}/reservation`, payload.data, {
                emulateJSON: true
            }).then(res => {
                if (res.body.code == 0) {
                    payload.callback(res.body.data);
                } else {
                    ErrorHandle(res.body)
                }
            })
        },
    }
})
