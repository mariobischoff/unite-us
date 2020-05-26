export const state = () => ({
  fullName: null,
  auth: false,
  error: null
})

export const mutations = {
  SET_AUTH (state, auth) {
    state.auth = auth
  },
  SET_NAME (state, name) {
    state.fullName = name
  },
  SET_ERROR (state, error) {
    state.error = error
  }
}

export const getters = {
  isAuth (state) {
    return state.auth
  },
  fullName (state) {
    return state.fullName
  }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      commit('SET_ERROR', null)
      const { name, token } = await this.$axios.$post('/users/auth', payload)
      localStorage.setItem('token', token)
      commit('SET_AUTH', true)
      commit('SET_NAME', name)
    } catch (error) {
      commit('SET_ERROR', error.message)
    }
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
