<template>
  <div class="container-fluid col-md-11 mt-5">   
			<article class="post pt-5" v-if="post">
				<header class="pb-2">
					<h3 class="text-success">{{ post.id }}. {{ post.title }}</h3>
					<div class="post-details">
 						<!-- <i class="fa fa-user"></i>Post ID: {{ post.tag }} -->
            Popular Tags: 
              <button class="btn btn-sm btn-success border-0 p-0 px-3 mx-1" v-for="tag in post?.tags" :key="tag">{{ tag }}</button>
					</div>
				</header>
				<div class="post-image">
					<img src="https://nandoangelo.github.io/template-bootstrap/assets/img/hero-bg.jpg" class="img-fluid" alt="Hero Image">
				</div>
        <div class="post-details py-2">
						<i class="bi bi-hand-thumbs-up-fill likes"></i> {{ post?.reactions?.likes || 0 }} &nbsp
 						<i class="bi bi-hand-thumbs-down-fill likes"></i>{{ post?.reactions?.dislikes || 0 }} &nbsp
 						<i class="bi bi- likes"></i>Views {{ post?.views || 0 }} 
				</div>
				<div class="post-excerpt py-3">
					<p>{{ post.body }} </p>
				</div>
			</article>

    <div v-else>
      <p>Something went wrong!!</p>
    </div>
    <router-link to="/" class="btn btn-success mt-2 p-1 px-3">Back</router-link>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';  // Import useHead for dynamic head management

  
const post = ref([]);

const route = useRoute();

// Fetching post details based on the route parameter (post ID)
const fetchPost = async () => {
  const response = await fetch(`https://dummyjson.com/posts/${route.params.id}`);
    post.value = await response.json();

    // Dynamically set meta tags based on post content
    useHead({
      title: post.value.title || 'Default Title',
      meta: [
        {
          name: 'description',
          content: post.value.body || 'Default description',
        },
        {
          property: 'og:title',
          content: post.value.title || 'Default Open Graph Title',
        },
        {
          property: 'og:description',
          content: post.value.body || 'Default Open Graph Description',
        },
      ],
    });
    
};

// Fetching the post details when the component is mounted
onMounted(() => {
  fetchPost();
});


</script>

<style scoped>
.likes{
  color: hsla(160, 100%, 37%, 1);
}
</style>