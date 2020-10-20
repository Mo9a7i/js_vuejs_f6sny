<template>
  <div id="app">
    <Navbar/>
    <Jokes />
  </div>
</template>

<script>
import Jokes from "./components/Jokes.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Jokes,
    Navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
