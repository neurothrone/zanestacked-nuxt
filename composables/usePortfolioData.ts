import { ref } from 'vue'
import projectsData from '~/data/seed-projects.json'
import skillsData from '~/data/seed-skills.json'
import projectSkillsData from '~/data/seed-project-skills.json'

export interface Project {
  title: string
  slug: string
  description: string
  imageUrl: string | null
  githubUrl: string | null
  demoUrl: string | null
}

export interface Skill {
  name: string
  yearsOfExperience: number
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

export interface ProjectSkill {
  slug: string
  skillName: string
}

export function usePortfolioData() {
  const projects = ref<Project[]>(projectsData)
  const skills = ref<Skill[]>(skillsData)
  const projectSkills = ref<ProjectSkill[]>(projectSkillsData)

  // Get all projects
  const getAllProjects = () => projects.value

  // Get a project by slug
  const getProjectBySlug = (slug: string) =>
    projects.value.find(project => project.slug === slug)

  // Get all skills
  const getAllSkills = () => skills.value

  // Get skills for a specific project
  const getSkillsForProject = (slug: string) => {
    const skillNames = projectSkills.value
      .filter(ps => ps.slug === slug)
      .map(ps => ps.skillName)

    return skills.value.filter(skill => skillNames.includes(skill.name))
  }

  // Get projects that use a specific skill
  const getProjectsWithSkill = (skillName: string) => {
    const projectSlugs = projectSkills.value
      .filter(ps => ps.skillName === skillName)
      .map(ps => ps.slug)

    return projects.value.filter(project => projectSlugs.includes(project.slug))
  }

  return {
    projects,
    skills,
    projectSkills,
    getAllProjects,
    getProjectBySlug,
    getAllSkills,
    getSkillsForProject,
    getProjectsWithSkill
  }
}
