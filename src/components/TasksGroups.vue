<script setup>
import { useGroupStore } from "../stores/groups";
import TasksGroupsCard from "./TasksGroupsCard.vue";
import draggable from "vuedraggable";
const groupStore = useGroupStore();

function updateGroupOrder() {
  groupStore.updateGroupOrder();
}
</script>

<template>
  <div class="tasks-group">
    <el-scrollbar class="tasks-group__scrollbox">
      <div
        class="tasks-group__scrollbox-inner"
        v-if="groupStore.groups.length > 0"
      >
        <draggable
          :list="groupStore.groups"
          itemKey="group"
          group="group"
          class="tasks-group__card-wrapper"
          @change="updateGroupOrder"
        >
          <template #item="{ element }">
            <TasksGroupsCard :key="element._id" v-bind="element" />
          </template>
        </draggable>
      </div>
      <el-empty v-else
        ><template #description>
          <p class="tasks-group__emty-desc">No active groups</p>
        </template></el-empty
      >
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.tasks-group {
  flex-grow: 1;

  &__scrollbox-inner {
    padding-bottom: 20px;
  }

  &__card-wrapper {
    display: flex;
    gap: 10px;
  }

  &__emty-desc {
    color: #fff;
  }
}
</style>
