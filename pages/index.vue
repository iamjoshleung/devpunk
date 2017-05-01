<template>
  <div id="home">
    <div class="sectionLayout--insetColumn">
      <h1>Who is this guy?  ff</h1>
    </div>
    <div class="sectionLayout--outsetColumn">
      <figure>
        <img :src="img_intro" alt="Intro image" class="thumbnail">
      </figure>
    </div>
    <div class="sectionLayout--insetColumn">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        img_intro: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?dpr=1&auto=format&fit=crop&w=1500&h=972&q=80&cs=tinysrgb&crop=&bg='
      }
    }
  }
</script>

<style scoped>
  #home {
    margin-top: 50px;
  }

  .sectionLayout--insetColumn {
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
  }

  .sectionLayout--outsetColumn {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }

  .sectionLayout--outsetColumn {
    margin-top: 52px;
  }

  .sectionLayout--outsetColumn+.sectionLayout--insetColumn {
    margin-top: 50px;
  }

  p {
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -.003em;
  }

  .thumbnail {
    width: 100%;
  }
</style>