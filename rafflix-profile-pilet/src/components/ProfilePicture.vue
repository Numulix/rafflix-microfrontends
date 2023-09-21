<template>
  <div
      class="profile-icon"
      :style="{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }"
  ></div>
</template>

<script>
export default {
  props: {
    imageUrl: String
  }
}
</script>

<style>

</style>