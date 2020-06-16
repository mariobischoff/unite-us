import jwt from 'jsonwebtoken'

export default async function ({ store, redirect, $axios, route }) {
  const token = localStorage.getItem('token')
  if (!token) {
    return redirect('/signup')
  }
  const decoded = jwt.decode(token)
  if (Date.now() >= decoded.exp * 1000) {
    return redirect('/signin')
  } else {
    $axios.setToken(token)
    await store.dispatch('user/fetch', decoded.id)
    const user = store.getters['user/getUser']
    if (route.fullPath === '/signupteam' && !user.vip) { redirect('/payment') }
  }
}
