import store from '../store'

export default function (to, from, next) {
  if (store.getters.user !== 0) {
    next()
  } else {
    next('/login?loginError=true')
  }
}
