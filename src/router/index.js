import Vue from 'vue'
import VueRouter from 'vue-router'
import Transaction from '../views/Transaction.vue'
import Checkout from '../views/Checkout.vue'
import Done from '../views/Done.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Transaction',
    component: Transaction
  },
  {
    path: '/check-out',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/done',
    name: 'Done',
    component: Done
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
