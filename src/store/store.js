import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var moment = require('moment')

const state = {
  actualYear: new Date().getFullYear(),
  weekNumber: moment().week(),
  weekSelectedPeriod: ''
}

const getters = {
  actualYear: state => state.actualYear,
  weekNumber: state => state.weekNumber,
  weekSelectedPeriod: state => state.weekSelectedPeriod
}

const mutations = {
  UPDATE_ACTUAL_YEAR (state, year) {
    state.actualYear = year
  },
  UPDATE_WEEK_NUMBER (state, week) {
    state.weekNumber = week
  },
  UPDATE_WEEK_SELECTED_PERIOD (state, weekSelectedPeriod) {
    console.log('[MUTATIONS] Week Selected Period : ' + weekSelectedPeriod)
    state.weekSelectedPeriod = weekSelectedPeriod
  }
}

const actions = {
  updateActualYear (context, year) {
    context.commit('UPDATE_ACTUAL_YEAR', year)
  },
  updateWeekNumber (context, week) {
    context.commit('UPDATE_WEEK_NUMBER', week)
  },
  updateWeekSelectedPeriod (context, weekSelectedPeriod) {
    console.log('[ACTIONS] Week Selected Period : ' + weekSelectedPeriod)
    context.commit('UPDATE_WEEK_SELECTED_PERIOD', weekSelectedPeriod)
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  strict: true
})
