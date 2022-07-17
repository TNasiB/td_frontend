<script setup>
import { Rank } from "@element-plus/icons-vue";
defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <div class="task-card">
    <el-card shadow="hover">
      <div class="task-card__inner">
        <p>{{ title }}</p>
        <el-icon color="#000"><Rank /></el-icon>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.task-card {
  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }
}
</style>
