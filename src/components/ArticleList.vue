<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mt-1">
        <h1 class="h6 font-weight-bold">{{ title }}</h1>
      </v-col>

      <v-col cols="12">
        <div v-show="allArticles.length == 0">
          <v-card
            elevation="6"
            class="article-card grey lighten-4 d-flex align-center"
          >
            <v-card-text>Click below to load the latest articles</v-card-text>
          </v-card>
        </div>

        <div v-show="allArticles.length > 0">
          <v-card
            elevation="6"
            class="article-card grey lighten-4 d-flex align-center"
            style="height: 100%"
          >
            <v-card-text>
              <transition-group
                class="d-flex flex-column align-start"
                name="staggered-fade"
                tag="ul"
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
              >
                <li v-for="el in allArticles.slice(0, 10)" :key="el.title">
                  <p style="padding: 10px 13px">{{ el.title }}</p>
                </li>
              </transition-group>
            </v-card-text>
          </v-card>
        </div>
      </v-col>

      <v-col v-if="allArticles.length == 0" cols="12">
        <v-btn
          :loading="isLoading"
          @click="getArticles()"
          class="grey darken-3 white--text"
          elevation="2"
          >Get Latest Articles!</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ArticleList",
  props: ["title"],
  data: () => ({
    articleList: [
      { title: "test 1" },
      { title: "test 2" },
      { title: "test 3" },
    ],
  }),
  computed: {
    allArticles() {
      return this.$store.getters.allArticles;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    getArticles() {
      this.$store.dispatch("getArticles");
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 1, height: "3em" }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>

<style scoped>
.article-card {
  height: 300px;
}
ul {
  list-style-type: none;
  padding-left: 0px !important;
}
li {
  width: 100%;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 0%), 0px 6px 10px 0px rgb(0 0 0 / 0%),
    0px 1px 18px 0px rgb(0 0 0 / 12%) !important;
  margin: 0.5rem 0;
  text-align: left;
}
p {
  margin-bottom: 0px !important;
}
</style>
