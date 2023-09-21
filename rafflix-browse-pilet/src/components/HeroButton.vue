<template>
  <div>
    <template v-if="isExternalLink">
      <a :href="href" target="_blank" class="Button" :data-primary="primary">{{
        text
      }}</a>
    </template>
    <template v-else>
      <a :href="href" class="Button" :data-primary="primary">{{ text }}</a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    primary: Boolean,
    text: String,
  },
  computed: {
    isExternalLink() {
      return this.href.startsWith("http");
    },
  },
};
</script>
