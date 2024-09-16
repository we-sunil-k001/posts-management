import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'

//--------------------------------------------------------------------
import Posts2 from '../views/Posts2.vue'
import PostDetails2 from '../views/PostDetails2.vue'

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
    },

    //--------------------------------------------------------------------
    // Below routes to showcase the same project using Pinia
    {
      path: '/pinia',
      name: 'pinia-home',
      component: Posts2  // Main page will be showing list of posts
    },
    {
      path: '/pinia/post/:id',   // Dynamic route ID for post details
      name: 'post-details2',
      component: PostDetails2,
      props: true,
    },
 
  ]
})

export default router
