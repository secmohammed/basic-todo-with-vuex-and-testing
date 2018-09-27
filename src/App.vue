<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Tasks/>
  </div>
</template>

<script>
import Tasks from './components/Tasks'

export default {
  components: {
    Tasks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
