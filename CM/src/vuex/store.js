import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        url: 'http://119.23.110.85:9000/cmapi/v1',
        // url: 'http://192.168.1.90:8081/cmapi/v1',
        userId: '',
        appid: 'wx0bfb49950f295128',
        img: '',
        name: '',
    },
    mutations: {
        showOne(state, userid) {
            state.userId = userid
        }
    }
})