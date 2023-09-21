<template>
  <div class="UserProfile">
    <div class="User">
      <div class="name">{{ user.name }}</div>
      <div class="image">
        <img v-if="user.imageUrl != ''" :title="user.avatarId" :src="user.imageUrl" />
        <template v-else>
          <div v-html="avatar"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import avatars from "../data/avatars";

export default {
  props: {
    user: Object
  },
  data() {
    return {
      avatar: this.user.avatarId ? avatars[this.user.avatarId] : avatars[0],
    }
  }
}
</script>