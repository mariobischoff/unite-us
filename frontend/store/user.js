export const state = () => ({
  user: null,
  users: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_USERS (state, users) {
    state.users = users
  }
}

export const getters = {
  getUser (state) {
    return state.user
  },
  getUsers (state) {
    return state.users
  }
}

export const actions = {
  async login ({ dispatch, commit }, payload) {
    const { id, token } = await this.$axios.$post('/users/auth', payload)
    localStorage.setItem('token', token)
    this.$axios.setToken(token)
    await dispatch('fetchUser', id)
  },
  logout ({ commit }) {
    localStorage.clear()
    commit('SET_USER', null)
  },
  async fetchUser ({ commit }, id) {
    if (id) {
      const [user] = await this.$axios.$get(`/users/${id}`)
      commit('SET_USER', user)
    } else {
      const users = await this.$axios.$get('/users')
      commit('SET_USERS', users)
    }
  },
  async register ({ commit }, payload) {
    await this.$axios.post('/users', payload)
  }
}
