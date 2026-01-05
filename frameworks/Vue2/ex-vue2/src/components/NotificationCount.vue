<template>
  <p>
    Messages: <span class="count">{{ messageCount }}</span>
    <a @click.prevent="handleUpdate">(update)</a>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NotificationCount extends Vue {
  @Prop() private initialCount!: number;

  // data
  messageCount = 0;

  // methods
  handleUpdate() {
    //TODO: fetch
    this.messageCount += 2;
  }
}
</script>

<style scoped lang="scss"></style>
