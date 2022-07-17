<template>
  <div class="app-workplace">
    <tasks-groups />
  </div>
</template>

<script setup>
import TasksGroups from "./TasksGroups.vue";
import { useGroupStore } from "../stores/groups";
import { useTasksStore } from "../stores/tasks";

useGroupStore()
  .fetchGroups()
  .then(() => useTasksStore().fetchTasks());
</script>

<style lang="scss" scoped>
.app-workplace {
  padding: 10px;
  background-color: gray;
  flex-grow: 1;
}
</style>
