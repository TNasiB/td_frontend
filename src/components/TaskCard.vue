<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <div class="task-card">
    <el-card shadow="hover"> {{ title }} </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
