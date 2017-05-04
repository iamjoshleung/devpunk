<template>
  <div class="container" id="projects">
    <transition-group name="fade" tag="div" class="row" appear>
      <project-card v-for="project in projects" :key="project.id" :project="project" />
    </transition-group>
  </div>
</template>

<script>
import ProjectCard from '~components/ProjectCard'
import ClientProjectData from '../../mixins/ClientProjectData'

export default {
  mixins: [ClientProjectData],
  name: 'ClientProjects',
  components: {
    ProjectCard
  },
  head () {
    return {
      title: 'Client Projects',
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