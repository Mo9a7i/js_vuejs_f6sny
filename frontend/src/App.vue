<template>
  <div id="app">
    <vue-headful title="كل النكت" description="موقع فطسني موقع فنان فيه نكت كثير وأشياء سوف تحبنها كثيراً جداً" keywords="نكت، اشياء، وش، تبي"
      image="" lang="ar" ogLocale="" url="" />
    <Header :counters="counters" />
    <b-container>
      <b-row>
        <b-col cols="8">
          <router-view class="my-4" />
        </b-col>
        <b-col cols="4">
          <Sidebar :counters="counters" />
        </b-col>
      </b-row>
    </b-container>
    
    
  </div>
</template>

<script>
import Header from "./components/layouts/_Header.vue";
import Sidebar from "./components/layouts/_Sidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar 
  },
  data() {
    return {
      counters:{},
    };
  },
  mounted() {
    fetch("http://localhost:8080/counters", {
      method: "GET",
      headers: {
      "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(data => { this.counters = data; });
  }
};
</script>
