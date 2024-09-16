<template>

  <div class="card" @click="handleClick">
    <a><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
    <div class="card-body">
      <!-- <div class="small text-muted">{{ postAllData.id }}</div> -->
      <h3 class="card-title h4">{{ postAllData.id }}. {{ postAllData.title.slice(0, 12) }}</h3>
      <p class="card-text">{{ postAllData.body.slice(0, 80) }}..
      </p>
      <a class="btn btn-success">Read more →</a>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    postAllData: Object,
  });

  // defineEmits : is imp. when you're child is communicating with parent, in our case Parent is holding **@click="goToPost(post.id)" **
  // So to use that parent event in child custom event is needed, and that **defineEmits** enables
  const emit = defineEmits(['click']);

  const handleClick = () => {
    emit('click');
  };
</script>

<style scoped>
  /* Add custom styles for the PostCard if needed */

  .card {
    cursor: pointer;
  }
</style>