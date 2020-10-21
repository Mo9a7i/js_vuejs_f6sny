<template>
  <div id="app">
    <vue-headful
      title="كل النكت"
      description="موقع فطسني موقع فنان فيه نكت كثير وأشياء سوف تحبنها كثيراً جداً"
      keywords="نكت، اشياء، وش، تبي"
      image=""
      lang="ar"
      ogLocale=""
      url=""
    />
    <Header />
    <Main class="my-4" />
  </div>
</template>

<script>
import Header from "./components/layouts/_Header.vue";
import Main from "./components/layouts/_Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main
  }
};
</script>
