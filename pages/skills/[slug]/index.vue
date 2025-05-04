<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    Skill: {{ route.params.slug }}
  </div>
</template>

<style scoped></style>
