<template>
  <div class="card h-100" @click="handleClick">
    <div class="card-body">
      <h5 class="card-title">{{ post.title.slice(0, 12) }}</h5>
      <p class="card-text">{{ post.body.slice(0, 100) }}...</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
/* Add custom styles for the PostCard if needed */
</style>
