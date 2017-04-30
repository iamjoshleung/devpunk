<template>
  <div class="container" id="projects">
    <app-title title="Pet Projects" />
    <div class="row">
      <project-card v-for="project in projects" key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'
import ProjectData from '../mixins/ProjectData'

export default {
  mixins: [ProjectData],
  name: 'PetProjects',
  components: {
    ProjectCard
  }
}
</script>

<style scoped>
  #projects {
    margin-top: 50px;
  }

  .cardLayout-outer {
    margin-bottom: 25px;
  }
</style>