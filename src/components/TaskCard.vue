<script setup>
import { Rank } from "@element-plus/icons-vue";
import { ref } from "vue";
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const dropdownOpen = ref(false);
</script>

<template>
  <div class="task-card">
    <el-card shadow="hover" @click="dropdownOpen = !dropdownOpen">
      <div class="task-card__inner">
        <p>{{ title }}</p>
        <el-icon color="#000"><Rank /></el-icon>
      </div>
      <div v-if="dropdownOpen" class="task-card__desc">{{ desc }}</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.task-card {
  cursor: pointer;
  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }
}
</style>
