<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen cyberpunk-grid">
    <Navbar/>
    <main class="flex-grow pt-16">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped></style>
