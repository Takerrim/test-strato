<template>
  <div id="app">
    <Panel />
  </div>
</template>

<script>
import Panel from './components/Panel.vue'

export default {
  name: 'app',
  components: {
    Panel
  }
}
</script>

<style>
* {
  outline: none;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
