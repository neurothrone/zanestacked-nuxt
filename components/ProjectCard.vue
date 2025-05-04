<template>
  <div class="neon-card group">
    <h3 class="text-xl mb-3 gradient-text">{{ project.title }}</h3>
    <p class="text-gray-300 mb-4">{{ project.description }}</p>

    <div class="mb-4 flex flex-wrap gap-2">
      <div
        v-for="skill in projectSkills"
        :key="skill.name"
        class="skill-badge text-xs"
      >
        {{ skill.name }}
      </div>
    </div>

    <div class="flex space-x-3 mt-auto">
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        class="neon-button text-sm group"
      >
        <span class="mr-1">GitHub</span>
        <span class="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform inline-block">↗</span>
      </a>
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        class="neon-button text-sm group"
      >
        <span class="mr-1">Live Demo</span>
        <span class="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform inline-block">↗</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioData, type Project } from '~/composables/usePortfolioData'

const props = defineProps<{
  project: Project
}>()

const { getSkillsForProject } = usePortfolioData()

const projectSkills = computed(() => {
  return getSkillsForProject(props.project.slug)
})
</script>
