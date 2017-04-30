<template></template>

<script>
  export default {
    name: 'AppTitle',
    props: ['title'],
    methods: {
      setTitle(title) {
        if(title) {
          document.title = `${title} | DevPunk`
        } else {
          document.title = 'DevPunk'
        }
      }
    },
    created () {
      this.setTitle(this.title)
    },
    watch: {
      title () {
        this.setTitle(this.title)
      }
    }
  }
</script>
