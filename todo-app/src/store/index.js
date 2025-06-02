import { createStore } from 'vuex'

export default createStore({
  state: {
    showWeather: false,
    username: 'Guest',
  },
  mutations: {
    toggleShowWeather(state) {
      state.showWeather = !state.showWeather
    },
    setUsername(state, name) {
      state.username = name
    }
  },
  actions: {
    updateUsername({ commit }, name) {
      commit('setUsername', name)
    }
  },
  getters: {
    isShowWeather: state => state.showWeather,
    username: state => state.username
  }
})