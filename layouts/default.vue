<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
  import AppHeader from '~components/AppHeader'

  export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
.modal-backdrop {
  background: rgba(239, 239, 239, 0.96);
}

.btn-custom,
.btn-custom:visited,
.btn-custom:hover,
.btn-custom:active {
  border: none;
  color: white;
}

.btn-delhi {
  background: #808080; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #808080, #3fada8); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #808080, #3fada8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn-mauve {
  background: #42275a; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #42275a, #734b6d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn-deepsea {
  background: #2C3E50;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn-grapefruit {
  background: #e96443;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #904e95, #e96443);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #904e95, #e96443); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.fade-enter-active {
  transition: all 1.7s ease;
}
.fade-leave-active {
  transition: all 1.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>