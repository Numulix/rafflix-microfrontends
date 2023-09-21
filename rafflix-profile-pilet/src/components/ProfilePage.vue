<template>
  <div class="ProfilePage">
    <AccountSwitcher />
    <Logout v-if="user" :logout-action="logoutUser" />
  </div>
</template>

<script>
import AccountSwitcher from "./AccountSwitcher.vue";
import Logout from "./Logout.vue";

export default {
  components: {Logout, AccountSwitcher},
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null
    }
  },
  methods: {
    logoutUser() {
      localStorage.setItem("user", null)
    }
  }
}
</script>