<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="container">
    <h2>{{ msg }}</h2>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
