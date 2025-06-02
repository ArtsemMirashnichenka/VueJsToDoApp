import { createStore } from 'vuex'

export default createStore({
  state: {
    showWeather: false,
    userName: 'Guest',
  },
  mutations: {
    toggleShowWeather(state) {
      state.showWeather = !state.showWeather
    },
    setUsername(state, name) {
      state.userName = name
    },
  },
  actions: {
    updateUsername({ commit }, name) {
      commit('setUsername', name)
    },
  },
  getters: {
    isShowWeather: (state) => state.showWeather,
    userName: (state) => state.userName,
  },
})
