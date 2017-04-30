<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppTitle from './components/AppTitle'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppTitle
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
</style>
