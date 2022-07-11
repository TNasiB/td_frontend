<template>
  <div class="tasks-group">
    <el-scrollbar class="tasks-group__scrollbox">
      <div class="tasks-group__scrollbox-inner">
        <el-card
          v-for="group in groupsStore.groups"
          :key="group.id"
          class="box-card"
        >
          <template #header>
            <div class="card-header">
              <span class="card-header__title">{{ group.title }}</span>
              <el-button type="danger" :icon="Delete" circle />
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
import { useGroupStore } from "../stores/groups";
import { Delete } from "@element-plus/icons-vue";
import { func } from "../service/index";
const groupsStore = useGroupStore();
func();
</script>

<style lang="scss" scoped>
.tasks-group {
  flex-grow: 1;
  .box-card {
    width: 320px;
    min-width: 320px;
  }

  &__scrollbox-inner {
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
