import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import PostDetails from '../components/PostDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Posts
    },
    {
      path: '/post-details/id',
      name: 'post-details',
      component: PostDetails
    }
 
  ]
})

export default router
