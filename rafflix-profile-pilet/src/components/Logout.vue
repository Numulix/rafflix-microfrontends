<template>
  <a href="/" class="LogoutButton" v-on:click="logoutAction">Log Out</a>
</template>

<script>
export default {
  props: {
    logoutAction: Function
  }
}
</script>