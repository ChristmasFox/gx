import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入view和组件
import Home from '../views/home'
import Articles from '../views/articles.vue'
import Photo from '../views/photo.vue'
import Message from '../views/message.vue'
import About from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/articles',
    component: Articles
  },
  {
    path: '/photo',
    component: Photo
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
