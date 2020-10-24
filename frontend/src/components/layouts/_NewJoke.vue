<template>
  <b-modal id="jokeModal" size="xl" scrollable centered>
    <template #modal-title>عندك نكتة؟</template>
    <template #modal-footer>
      <b-button type="submit" variant="success">Register</b-button>
      <b-button variant="secondary" @click="show = false">Close</b-button>
    </template>
    <form>
      <div class="user-info text-left">
        <small>سيتم نشر النكتة بإسم: زائر | <a href="#">مساعدة؟</a></small>
      </div>
      <div class="joke-content">
        <div class="form-group">
          <textarea class="form-control" id="jokeContent" rows="6"></textarea>
        </div>
      </div>
      <div class="characters-info text-left">
        <small>عدد الحروف: 9</small>
      </div>
      <div class="categories-info">
        <b-form-group label="لازم تختار تصنيف واحد عالأقل:">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selected"
            :options="options"
            name="tags"
          ></b-form-checkbox-group>
        </b-form-group>
      </div>
    </form>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      options: []
    };
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
        this.options = data.map(function(elem) {
          return {
            text: elem.name,
            value: elem.id
          };
        });
      });
  }
};
</script>
