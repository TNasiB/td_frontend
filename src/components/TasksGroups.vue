<template>
  <div class="tasks-group">
    <el-scrollbar class="tasks-group__scrollbox">
      <div
        class="tasks-group__scrollbox-inner"
        v-if="groupStore.groups.length > 0"
      >
        <div
          class="tasks-group__card-wrapper"
          v-for="group in groupStore.groups"
          :key="group._id"
        >
          <TasksGroupsCard
            v-bind="group"
            @delete-group="deleteGroup"
            @update-group="updateGroup"
          />
        </div>
      </div>
      <el-empty v-else
        ><template #description>
          <p class="tasks-group__emty-desc">No active groups</p>
        </template></el-empty
      >
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useGroupStore } from "../stores/groups";
import TasksGroupsCard from "./TasksGroupsCard.vue";

const groupStore = useGroupStore();

function deleteGroup(id) {
  groupStore.deleteGroup(id);
}

function updateGroup(newGroup) {
  groupStore.updateGroup(newGroup);
}
</script>

<style lang="scss" scoped>
.tasks-group {
  flex-grow: 1;

  &__scrollbox-inner {
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
  }

  &__emty-desc {
    color: #fff;
  }
}
</style>
