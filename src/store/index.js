import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

//MODULES
import auth from '@/modules/authentication';


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [vuexLocal.plugin]
})
