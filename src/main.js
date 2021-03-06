import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyA4Tb_A0jWD7gJf5AcRhDzpaXryqtAADzc',
      authDomain: 'daf-ad.firebaseapp.com',
      databaseURL: 'https://daf-ad.firebaseio.com',
      projectId: 'daf-ad',
      storageBucket: 'daf-ad.appspot.com',
      messagingSenderId: '1054093686191'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
