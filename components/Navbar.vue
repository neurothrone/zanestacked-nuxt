<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="glass fixed top-0 left-0 right-0 z-50 px-4 py-3 shadow-primary">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold gradient-text">ZaneStacked</div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-8">
        <li>
          <NuxtLink to="/" class="animated-border py-2">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="animated-border py-2">Projects</NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden neon-button py-1 px-3 text-sm"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span v-if="!isMobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 glass py-4 px-6 border-t border-background-800"
    >
      <ul class="space-y-4">
        <li>
          <NuxtLink
            to="/"
            class="block py-2 animated-border"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/projects"
            class="block py-2 animated-border"
            @click="isMobileMenuOpen = false"
          >
            Projects
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-primary-400;
  text-shadow: 0 0 8px rgba(var(--primary-400), 0.7);
}
</style>
