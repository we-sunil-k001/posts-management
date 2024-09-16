<template>
  <div class="container-fluid col-md-11 mt-5">   
			<article class="post pt-5" v-if="post">
				<header>
					<h3><a href="#" title="Full Post">{{ post.title }}</a></h3>
					<div class="post-details">
						<i class="fa fa-clock-o"></i> <time>August 7, 2014</time> &nbsp
 						<i class="fa fa-user"></i>Post ID: {{ post.id }}
					</div>
				</header>
				<div class="post-image">
					<img src="https://nandoangelo.github.io/template-bootstrap/assets/img/hero-bg.jpg" class="img-fluid" alt="Hero Image">
				</div>
				<div class="post-excerpt py-3">
					<p>{{ post.body }}</p>
				</div>
			</article>

    <div v-else>
      <p>Something went wrong!!</p>
    </div>
    <router-link to="/" class="btn btn-primary mt-4">Back</router-link>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
  
const post = ref([]);

const route = useRoute();

// Fetching post details based on the route parameter (post ID)
const fetchPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  post.value = await response.json();
};

// Fetching the post details when the component is mounted
onMounted(() => {
  fetchPost();
});


</script>
