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
                <a class="nav-link text-white" href="#" role="button" data-toggle="modal" data-target="#jokeModal">جديد</a>
              </li>
              <!-- Add Jokes Modal -->
              <NewJoke />



              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">تصنيفات</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Category</a>
                  <a class="dropdown-item" href="#">Category</a>
                  <a class="dropdown-item" href="#">Category</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">+18</a>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="#">مراقبة</a>
              </li>

              <li class="nav-item">
                <b-button href="#" variant="link text-decoration-none text-white" v-b-modal.userModal><i class="fa fa-user fa-lg"></i></b-button>
              </li>

            </ul>
          </div>
        </div>
        <!-- Here the modal -->
        
        <!-- Here End Modal -->
      </nav>
      
      <Login />
</div>
  
</template>
<script>
import Login from "./_Login.vue";
import NewJoke from "./_NewJoke.vue";

export default {
  name: "App",
  components: {
    Login,
    NewJoke
  }
};
</script>