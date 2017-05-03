/*
 * @Author: Paul Gascou-Vaillancourt
 * @Date:   2017-04-27 12:24:21
 * @Last Modified by:   Paul Gascou-Vaillancourt
 * @Last Modified time: 2017-05-01 21:58:34
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  scenarios: [],
  questions: [],
  answers: [],
  userAnswers: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
})
