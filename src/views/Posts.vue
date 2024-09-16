<template>
  <div class="container mt-4">
    <h3 class="text-left text-success mb-4">All Posts</h3>
    <div class="row">
      <div v-for="post in posts" 
        :key="post.id" style="border: 2px;"
        class="col-lg-4 col-md-6 mb-4">
        <PostCard :postAllData="post" @click="goToPost(post.id)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostCard from '@/components/PostCard.vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
// console.log(posts);
const router = useRouter();

// Fetching posts from a mock API (e.g., jsonplaceholder)
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  posts.value = await response.json();
};

// Navigating to post details
const goToPost = (postId) => {
  router.push({ name: 'post-details', params: { id: postId } });
};  

// Fetching posts when the component is mounted
onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
/* Add custom styles here if needed */

</style>
