import Vue from 'vue'
import App from './components/App.vue'

import store from './store'
//testing mutation below
//store.commit('INIT_JOKES', [{test: 'test_joke'}, {test_2: 'test_jokes2'}])

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
