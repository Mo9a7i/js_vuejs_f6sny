<template>
  <b-container>
    <b-row>
      <!-- Homepage -->
      <b-col style="" cols="md-9">
        <Homepage />
      </b-col>

      <!-- Sidebar -->
      <b-col cols="md-3">
        <Sidebar />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Homepage from "./../Homepage.vue";
import Sidebar from "./_Sidebar.vue";

export default {
  name: "App",
  components: {
    Homepage,
    Sidebar
  }
};
</script>
