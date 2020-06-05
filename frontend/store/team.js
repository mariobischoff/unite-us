export const state = () => ({
  teams: [],
  error: null
})

export const mutations = {
  SET_TEAM (state, teams) {
    state.teams = teams
  },
  SET_ERROR (state, error) {
    state.error = error
  }
}

export const getters = {
  getTeams (state) {
    return state.teams
  }
}

export const actions = {
  async fetchTeams ({ commit }) {
    try {
      const teams = await this.$axios.$get('teams')
      commit('SET_TEAM', teams)
    } catch (error) {
      commit('SET_ERROR', error.message)
    }
  },
  async createTeam ({ commit }, payload) {
    await this.$axios.post('teams', payload)
  }
}
