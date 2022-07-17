<template>
  <el-row class="app-header">
    <el-col :span="12" class="app-header__main"
      ><h1 class="app-header__title">TODO Dashboard</h1></el-col
    >
    <el-col :span="12" class="app-header__main app-header__add-task">
      <el-dropdown>
        <el-button :icon="Edit" class="app-header__add-task--button"
          >Create</el-button
        >
        <template #dropdown>
          <el-dropdown-item @click="showCreateModal('task')">
            <p>create new task</p>
          </el-dropdown-item>

          <el-dropdown-item @click="showCreateModal('group')">
            <p>create new group</p>
          </el-dropdown-item>
        </template>
      </el-dropdown>
    </el-col>
    <create-modal
      @close-modal="closeModal"
      @before-close="closeModal"
      @close-modal1="closeModal1"
      :isModalOpen="isModalOpen"
      :type="typeOfModal"
    />
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import { Edit } from "@element-plus/icons-vue";
import CreateModal from "./CreateModal.vue";

let isModalOpen = ref(false);
let typeOfModal = ref("");

function showCreateModal(type) {
  typeOfModal.value = type;
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}
function closeModal1() {
  isModalOpen.value = false;
}
</script>

<style lang="scss">
.app-header {
  background-color: var(--el-color-primary);
  height: 50px;
  padding: 0 10px;

  &__title {
    font-size: 32px;
    margin: 0;
    color: #fff;
    font-weight: 700;
    padding-left: 10px;
  }

  &__main {
    display: flex;
    align-items: center;
  }

  &__add-task {
    justify-content: flex-end;
  }
}
</style>
