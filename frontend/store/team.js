export const state = () => ({
  teams: null
})

export const mutations = {
  SET_TEAM (state, teams) {
    state.teams = teams
  }
}

export const getters = {
  getTeams (state) {
    return state.teams
  }
}

export const actions = {
  async fetchTeams ({ commit }) {
    const teams = await this.$axios.$get('teams')
    commit('SET_TEAM', teams)
  },
  async createTeam ({ commit }, payload) {
    await this.$axios.post('teams', payload)
  }
}
