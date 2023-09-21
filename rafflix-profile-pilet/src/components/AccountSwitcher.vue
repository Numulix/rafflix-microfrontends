<template>
  <div class="AccountSwitcher">
    <div class="wrapper">
      <h1>Who's watching?</h1>
      <div class="profile-wrap">
        <Account v-for="user in users" :key="user.id" :user="user" :on-click-name="setUser"/>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from '../data/users'
import Account from "./Account.vue";

export default {
  components: {Account},
  data() {
    return {
      users: users
    }
  },
  methods: {
    setUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
}
</script>