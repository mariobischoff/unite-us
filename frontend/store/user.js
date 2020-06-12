export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const getters = {
  getUser (state) {
    return state.user
  }
}

export const actions = {
  async login ({ dispatch }, payload) {
    const { id, token } = await this.$axios.$post('/users/auth', payload)
    localStorage.setItem('token', token)
    this.$axios.setToken(token)
    await dispatch('fetch', id)
  },
  logout ({ commit }) {
    localStorage.clear()
    commit('SET_USER', null)
  },
  async fetch ({ commit }, id) {
    const [user] = await this.$axios.$get(`/users/${id}`)
    commit('SET_USER', user)
  },
  async update ({ commit, state, dispatch }, payload) {
    await this.$axios.put(`/users/${state.user._id}`, payload)
    await dispatch('fetch', state.user._id)
  },
  async register ({ commit }, payload) {
    await this.$axios.post('/users', payload)
  }
}
