<template>
  <div class="card h-100" @click="handleClick">
    <div class="card-body">
      <h5 class="card-title">{{ postAllData.id }}</h5>
      <h5 class="card-title">{{ postAllData.title.slice(0, 12) }}</h5>
      <p class="card-text">{{ postAllData.body.slice(0, 100) }}...</p>
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

.card{
  cursor: pointer;
}
</style>
