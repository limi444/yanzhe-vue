import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userInfo = {
  username:localStorage.getItem('username')||'',
  token:localStorage.getItem('token')||''
};
const create_article =  {}

export default new Vuex.Store({
  state: {
    userInfo,
    create_article
  },
  mutations: {

  },
  actions: {

  }
})
