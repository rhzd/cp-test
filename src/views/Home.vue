<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card elevation="0">
          <v-card-text><article-list title="Articles" /></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleList from "../components/ArticleList";

export default {
  name: "Home",

  components: {
    ArticleList,
  },
};
</script>
