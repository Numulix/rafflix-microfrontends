<template>
  <div class="Browse">
    <Hero
      :title="herodata.title"
      :backgroundUrl="herodata.backgroundUrl"
      :logoUrl="herodata.logoUrl"
      :text="herodata.text"
      :media_type="herodata.media_type"
      :movieId="herodata.movieId"
    />
    <Showcase
      v-for="(data, index) in showcasesdata"
      :key="index"
      :title="data.title"
      :media_type="data.media_type"
      :url="data.url"
      :MovieTile="MovieTile"
    />
  </div>
</template>
<script>
import Hero from "./Hero.vue";
import Showcase from "./Showcase.vue";
import herodata from "../data/hero.json";
import showcases from "../data/showcases.json";

export default {
  props: {
    MovieTile: Function,
  },
  data() {
    return {
      herodata: herodata,
      showcasesdata: showcases,
    };
  },
  components: {
    Hero,
    Showcase,
  },
};
</script>
<style></style>
