<template>
  <div class="app-workplace">
    <tasks-groups />
  </div>
</template>

<script setup>
import TasksGroups from "./TasksGroups.vue";
</script>
<style lang="scss" scoped>
.app-workplace {
  padding: 10px;
  background-color: gray;
  flex-grow: 1;
}
</style>
