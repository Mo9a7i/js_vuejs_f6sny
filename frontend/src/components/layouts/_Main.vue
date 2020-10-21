<template>
    <b-container>
        <b-row>
            <!-- Jokes -->
            <b-col style="background-color: red;" cols="9">
                <Jokes />
            </b-col>

            <!-- Sidebar -->
            <b-col cols="3">
                <Sidebar />
            </b-col>
        </b-row>
        
        
    </b-container>
    
</template>
<script>
import Jokes from "./../Jokes.vue";
import Sidebar from "./_Sidebar.vue";

export default {
  name: "App",
  components: {
    Jokes,
    Sidebar
  }
};
</script>