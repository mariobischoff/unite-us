import service from '../services/users'

export const state = () => ({
  fullName: null,
  auth: false,
  error: false
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
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      service.auth({ payload })
        .then((response) => {
          const token = response.data.token
          const fullName = response.data.name
          localStorage.setItem('token', token)
          commit('SET_AUTH', true)
          commit('SET_NAME', fullName)
          resolve()
        })
        .catch((error) => {
          commit('SET_ERROR', error.message)
          reject(error)
        })
    })
  },
  register (payload) {
    return new Promise((resolve, reject) => {
      service.create({ payload })
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
