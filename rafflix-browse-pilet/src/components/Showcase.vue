<template>
  <div class="TitleList" :data-loaded="mounted">
    <div class="Title">
      <h1>{{ title }}</h1>
      <div class="titles-wrapper">
        <template v-if="data.results">
          <extension-component
            name="MovieTile"
            v-for="title in data.results.slice(0,5)"
            :key="title.id"
            :params="{
              media_type: media_type,
              movieId: title.id,
              title: title.name || title.original_title,
              score: title.vote_average,
              overview: title.overview,
              backdrop: `http://image.tmdb.org/t/p/original/${title.backdrop_path}`
            }"
          >
          </extension-component>
        </template>
        <p v-else style="color: gray">nothing found</p>
      </div>
    </div>
  </div>
</template>
<script>
const apiKey = "87dfa1c669eea853da609d4968d294be";

export default {
  props: {
    title: String,
    media_type: String,
    url: String,
    MovieTile: Function,
  },
  data() {
    return {
      mounted: false,
      data: {},
      titles: [],
    };
  },
  methods: {
    loadContent(url) {
      const requestUrl = `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`;
      fetch(requestUrl)
          .then(res => res.json())
          .then(res => this.data = res)
          .catch(console.error)
    },
  },
  watch: {
    url: "loadContent",
  },
  mounted() {
    this.mounted = true;
    this.loadContent(this.url);
  },
};
</script>
<style></style>
