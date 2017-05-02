<template>
  <div class="container" id="projects">
    <div class="row">
      <project-card v-for="project in projects" key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from '~components/ProjectCard'
import ProjectData from '../../mixins/ProjectData'

export default {
  mixins: [ProjectData],
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