<template>
  <div class="profile">
    <a href="/" @click="onClickName(user)">
      <template v-if="user.imageUrl">
        <ProfilePicture :image-url="user.imageUrl"/>
      </template>
      <template v-else>
        <div class="profile-icon" v-html="avatar"></div>
      </template>
    </a>
    <div class="profile-name">
      <a href="/" @click="onClickName(user)">{{ user.name }}</a>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture.vue";
import avatars from "../data/avatars.js";
import { createRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";

export default {
  components: {ProfilePicture},
  props: {
    user: Object,
    onClickName: Function
  },
  data() {
    return {
      avatar: this.user.avatarId ? avatars[this.user.avatarId] : avatars[0]
    }
  }
}
</script>