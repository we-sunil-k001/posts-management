<template>
  <div class="container-fluid col-lg-11 mt-5 pt-5">
    <h3 class="text-left text-success mb-4">All Posts</h3>
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-4 mb-4">
        <PostCard :postAllData="post" @click="goToPost(post.id)" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted } from 'vue';
  import PostCard from '../components/PostCard.vue';
  import { useRouter } from 'vue-router';
  import { useHead } from '@vueuse/head';   // for Dynamic Meta

  const posts = ref([]);
  // console.log(posts);
  const router = useRouter();

  // Fetching posts from a mock API (e.g., jsonplaceholder)
  const fetchPosts = async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    posts.value = data.posts;  

  };

  // Navigating to post details
  const goToPost = (postId) => {
    router.push({
      name: 'post-details',
      params: {
        id: postId
      }
    });
  };

  // Fetching posts when the component is mounted
  onMounted(() => {
    fetchPosts();
  });


  useHead({
      title: 'Posts List - Training Project',
      meta: [{
          name: 'All Posts',
          content: 'Explore the latest posts.',
        },
        {
          property: 'og:title',
          content: 'Posts List - Training Project',
        },
        {
          property: 'og:description',
          content: 'Explore the latest posts on our website.',
        },
        {
          property: 'og:url',
          content: 'http://localhost:5173/posts',
        },
      ],
  });

</script>

<style scoped>
  /* Add custom styles here if needed */
</style>