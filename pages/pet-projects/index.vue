<template>
  <div class="container" id="projects">
    <transition-group name="fade" tag="div" class="row" appear>
      <project-card v-for="project in projects" :key="project.id" :project="project" />
    </transition-group>
  </div>
</template>

<script>
import ProjectCard from '~components/ProjectCard'
import PetProjectData from '../../mixins/PetProjectData'

export default {
  mixins: [PetProjectData],
  name: 'PetProjects',
  components: {
    ProjectCard
  },
  head () {
    return {
      title: 'Pet projects',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
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