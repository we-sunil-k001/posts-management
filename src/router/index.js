import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Posts  // Main page will be showing list of posts
    },
    {
      path: '/post/:id',   // Dynamic route ID for post details
      name: 'post-details',
      component: PostDetails,
      props: true,
    }
 
  ]
})

export default router
