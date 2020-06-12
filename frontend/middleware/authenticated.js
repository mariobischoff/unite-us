import jwt from 'jsonwebtoken'

export default function ({ store, redirect, $axios }) {
  const token = localStorage.getItem('token')
  if (!token) {
    return redirect('/signup')
  }
  const decoded = jwt.decode(token)
  if (Date.now() >= decoded.exp * 1000) {
    return redirect('/signin')
  } else {
    $axios.setToken(token)
    store.dispatch('user/fetch', decoded.id)
  }
}
