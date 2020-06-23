// state data
export const state = () => ({
  jwt: null,
  checkJwt: false,
})

// for tracking state change (Synchronous)
export const mutations = {
  setToken(state, payload) {
    state.jwt = payload
  },
  removeToken(state, payload) {
    state.jwt = null
  },
  checkJwt(state, payload) {
    state.checkJwt = payload
  },
}

// for update like methods (Asynchronous)
export const actions = {
  login({ commit }, jwt) {
    sessionStorage.setItem('jwt', jwt)
    commit('setToken', jwt)
  },
  logout({ commit }) {
    sessionStorage.removeItem('jwt')
    commit('removeToken')
  },
}

// like computed
export const getters = {}