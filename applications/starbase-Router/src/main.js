import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Data from './components/Data.vue'

// Set up routes using the Data.vue component. This allows the user to type in the URL /data/something and it will appear in the app..ex /data/people
const routes = [
  { path: '/data/:type', component: Data}

]
//Pass the routes from above into the vue router
const router = new VueRouter({
  routes
}) 

new Vue({
  el: '#app',
  //Tell the vue instance to include the router
  router,
  render: h => h(App)
})
