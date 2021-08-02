<template>
  <v-container fluid>
    <v-row
      dense
      v-masonry
      transition-duration="0.3s"
      item-selector=".mono"
      id="views"
      v-if="posts.length > 0 && loading == false"
    >
      <v-col
        xs="12"
        sm="6"
        lg="3"
        md="6"
        v-for="post in posts"
        :key="post.id"
        class="mono"
        v-masonry-tile
      >
        <v-card class="mx-auto">
          <v-img height="250" :src="post.imageUrl"></v-img>
          <v-card-title> {{ post.title }} </v-card-title>

          <v-card-text>
            <v-icon>mdi-calendar</v-icon>
            {{ formatDate(post.publishedAt) }}
          </v-card-text>
          <v-card-text> {{ post.summary }} </v-card-text>
          <v-card-actions>
            
            <v-btn text color="blue lighten-2">
             <a :href="post.url" style="text-decoration: none"> VIEW</a></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="loading == true">
      <v-row>
        <v-col cols="12" md="4" v-for="item in 9" :key="item">
          <v-skeleton-loader type="article, actions"></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <div align="center" class="mt-6">
      <v-btn class="mr-3" v-if="page > 0" @click="prevPage">
        <v-icon>mdi-menu-left</v-icon>
      </v-btn>
      <v-btn @click="nextPage"><v-icon>mdi-menu-right</v-icon></v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      page: 0,
      loading: true,
    };
  },
  created() {
    this.$store.dispatch("post", this.page);
  },
  computed: {
    posts() {
      return this.$store.getters.getPost;
    },
  },
  watch: {
    posts(value) {
      if (value.length > 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
    },
  },
  updated() {
    this.$redrawVueMasonry();
  },
  methods: {
    formatDate(date) {
      var dates = new Date(date);
      return dates.toLocaleString("en-US").substring(0, 9);
    },
    async prevPage() {
      this.page--;
      this.loading = true;
      this.$store.dispatch("post", this.page);
    },
    async nextPage() {
      this.page++;
      this.loading = true;
      this.$store.dispatch("post", this.page);
    },
  },
};
</script>
