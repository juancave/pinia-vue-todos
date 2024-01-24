<script setup lang="ts">
import TitleMessage from '../components/TitleMessage.vue'
</script>

<template>
  <div class="container">
    <TitleMessage msg="Todos web application" />
    <hr />
    <div class="options">
      <span class="option">Add</span>
      <span class="option">Mark as completed</span>
      <span class="option">Delete</span>
      <span class="option">Filter by states</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

hr {
  width: 70%;
  margin: 0 auto;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  gap: 0.5rem;
}

.option {
  width: 50%;
  padding: 1rem;
  background-color: #f1f1f1;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  .option {
    width: 100%;
  }

  hr {
    width: 100%;
  }
}
</style>
