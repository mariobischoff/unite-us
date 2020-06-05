export const state = () => ({
  user: null,
  auth: false
})

export const mutations = {
  SET_AUTH (state, auth) {
    state.auth = auth
  },
  SET_USER (state, user) {
    state.user = user
  }
}

export const getters = {
  isAuth (state) {
    return state.auth
  },
  getUser (state) {
    return state.user
  }
}

export const actions = {
  async login ({ commit }, payload) {
    const { user, token } = await this.$axios.$post('/users/auth', payload)
    localStorage.setItem('token', token)
    commit('SET_USER', user)
    commit('SET_AUTH', true)
  },
  async register ({ commit }, payload) {
    try {
      commit('SET_ERROR', null)
      await this.$axios.post('/users', payload)
    } catch (error) {
      commit('SET_ERROR', error.message)
    }
  }
}
