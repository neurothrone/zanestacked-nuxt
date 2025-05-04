<script setup lang="ts">
import { usePortfolioData } from '~/composables/usePortfolioData'

const { getAllProjects, getAllSkills } = usePortfolioData()

const projects = getAllProjects()
const skills = getAllSkills()
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl mb-6 gradient-text font-bold">
          Futuristic Portfolio
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-10">
          A showcase of projects and skills with a dark violet theme
        </p>
        <div class="flex justify-center">
          <a href="#projects" class="neon-button group">
            View Projects
            <span class="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-2xl md:text-4xl mb-8 text-center primary-text">Skills</h2>
      <div class="glass p-6 rounded-lg max-w-4xl mx-auto">
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="skill-badge hover:shadow-primary transition-shadow duration-300"
          >
            <span class="mr-2">{{ skill.name }}</span>
            <span class="text-xs text-primary-400">{{ skill.yearsOfExperience }}y</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-2xl md:text-4xl mb-8 text-center primary-text">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
