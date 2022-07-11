<template>
  <div class="tasks-group">
    <el-scrollbar>
      <div class="wrapper">
        <el-card v-for="o in 10" :key="o" class="box-card">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" text>!!!!</el-button>
            </div>
          </template>
          <div v-for="o in 10" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useTasksStore } from "../stores/tasks";
const tasksStore = useTasksStore();
const tasks = tasksStore.tasks;
</script>

<style lang="scss" scoped>
.tasks-group {
  flex-grow: 1;
  .box-card {
    width: 320px;
    min-width: 320px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }

  .wrapper {
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
  }
}
</style>
