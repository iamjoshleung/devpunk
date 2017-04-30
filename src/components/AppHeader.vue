<template>
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <router-link to="/" class="navbar-brand">
    <img :src="img_logo" width="30" height="30" class="d-inline-block align-top" alt="">
    {{ name }}
  </router-link>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link" exact>HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/pet-projects" class="nav-link" exact>PET PROJECTS</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/client-projects" class="nav-link" exact>CLIENT PROJECTS</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/joshuajazleung">GITHUB</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      name: 'Joshua Leung',
      img_logo: 'http://placehold.it/30x30'
    }
  }
}
</script>

<style scoped>
a.nav-link.router-link-active {
  color: black;
}
.navbar {
  padding: .8rem 1rem;
}
.bg-faded {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
}
</style>