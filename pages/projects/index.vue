<script setup lang="ts">
// Use this version in click handlers
// const projects = await $fetch<[{ name: string, tech: string }]>("/api/projects");
// Use this version in setups like this script block, to be called only once.
const { data: projects } = await useFetch<[{ name: string, tech: string }]>("/api/projects");
</script>

<template>
  <NuxtLayout name="projects">
    <div>
      <ul>
        <li v-for="project in projects" :key="project.name">
          <div>{{ project.name }}</div>
          <div>{{ project.tech }}</div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  padding: 0;
}

li {
  padding: 20px;
}
</style>
