<template>
<div>
    <div class="rainbow"></div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-xl">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

              <li class="nav-item">
                <b-button href="#" variant="link text-decoration-none nav-link text-white" v-b-modal.jokeModal>جديد</b-button>
              </li>
              <!-- Add Jokes Modal -->
              <NewJoke />


              <b-nav-item-dropdown text="تصنيفات" v-if="tags">
                <b-dropdown-item href="#"  v-bind:key="tag.id" v-for="tag in tags">{{ `${tag.name}` }}</b-dropdown-item>
              </b-nav-item-dropdown>
              

              <li class="nav-item">
                <a class="nav-link text-white" href="#">مراقبة</a>
              </li>

              <li class="nav-item">
                <b-button href="#" variant="link text-decoration-none text-white" v-b-modal.userModal><i class="fa fa-user fa-lg"></i></b-button>
              </li>
              <Login />

            </ul>
          </div>
        </div>
        <!-- Here the modal -->
        
        <!-- Here End Modal -->
      </nav>
      
      
</div>
  
</template>
<script>
import Login from "./_Login.vue";
import NewJoke from "./_NewJoke.vue";

export default {
  data() {
    return {
      tags: []
    };
  },
  components: {
    Login,
    NewJoke
  },
  mounted() {
    fetch("http://localhost:8080/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.tags = data;
        console.log(data);
      });
  }
};


</script>