// state data
export const state = () => ({
  jwt: null,
  checkJwt: false,
  locales: ['en', 'ko'],
  locale: 'en',
})

// for tracking state change (Synchronous)
export const mutations = {
  setToken(state, payload) {
    this.$cookies.set('jwt', payload)
    state.jwt = payload
  },
  removeToken(state, payload) {
    state.jwt = null
  },
  checkJwt(state, payload) {
    state.checkJwt = payload
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}

// for update like methods (Asynchronous)
export const actions = {
  login({ commit }, jwt) {
    commit('setToken', jwt)
  },
  logout({ commit }) {
    this.$cookies.remove('jwt')
    commit('removeToken')
  },
}

// like computed
export const getters = {}
