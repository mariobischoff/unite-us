export default function ({ store, redirect }) {
  const token = localStorage.getItem('token')
  if (!store.state.user.auth && !token) {
    return redirect('/signin')
  }
}
