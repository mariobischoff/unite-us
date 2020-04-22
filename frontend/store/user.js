import service from '../services/users'

export const state = () => ({
  auth: false
})

export const mutations = {
  SET_AUTH (state, auth) {
    state.auth = auth
  }
}

export const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      service.auth({ payload })
        .then((response) => {
          const token = response.data.token
          localStorage.setItem('token', token)
          commit('SET_AUTH', true)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
