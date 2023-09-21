<template>
  <div
    id="hero"
    class="Hero"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="content">
      <img class="logo" :src="logoUrl" title="Logo" />
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <div class="button-wrapper">
        <HeroButton
          :primary="true"
          text="Watch Now"
          :href="`/watch/${media_type}/${movieId}`"
        />
        <extension-component
            name="ListToggle"
            :full="true"
            :params="{
              backgroundUrl: backgroundUrl,
              logoUrl: logoUrl,
              title: title,
              text: text,
              movieId: movieId,
              media_type: media_type,
              full: true
            }"
        ></extension-component>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
import HeroButton from "./HeroButton.vue";

export default {
  props: {
    backgroundUrl: String,
    logoUrl: String,
    title: String,
    text: String,
    media_type: String,
    movieId: Number,
  },
  components: {
    HeroButton,
  },
};
</script>

<style></style>
