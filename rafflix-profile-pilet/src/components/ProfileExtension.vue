<template>
  <a v-if="user == null" href="/profile">Log In</a>
  <a v-else href="/profile">
    <Profile :user="user" />
  </a>
</template>

<script>
import Profile from "./Profile.vue";

export default {
  components: {Profile},
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null
    }
  }
}
</script>