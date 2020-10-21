<template>
  <b-container>
    <vue-headful
      title="كل النكت"
      description="موقع فطسني موقع فنان فيه نكت كثير وأشياء سوف تحبنها كثيراً جداً"
      keywords="نكت، اشياء، وش، تبي"
      image=""
      lang="ar"
      ogLocale=""
      url=""
    />
    <div v-if="jokes.length">
      <b-row v-bind:key="joke.id" v-for="joke in jokes">
        <b-col class="col-md-12 p-3 mb-2 bg-light text-dark text-right" l="4">
          <div>
            <p class="p-0 m-0">{{ `${joke.content}` }}</p>
          </div>
          <div v-if="joke.author">
            <p class="p-0 m-0">{{ `${joke.author.username}` }}</p>
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <h5>Fetching jokes . . .</h5>
    </div>
  </b-container>
</template>


<script>
export default {
  data() {
    return {
      jokes: []
    };
  },
  mounted() {
    fetch("http://localhost:8080/jokes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.jokes = data;
      });
  }
};
</script>
