import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)
export default new Vuex.Store({ state, getters, mutations, actions })
