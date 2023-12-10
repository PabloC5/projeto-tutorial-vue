<template>
  <div id="app">
    <listTask/>
  </div>
</template>

<script>
import listTask from './components/listTask.vue';

export default {
  name: 'App',
  components: {
    listTask
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
