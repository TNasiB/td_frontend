<script setup>
import { useGroupStore } from "../stores/groups";
import { VueDraggableNext } from "vue-draggable-next";
import { computed } from "vue";
import TasksGroupsCard from "./TasksGroupsCard.vue";
const groupStore = useGroupStore();

function deleteGroup(id) {
  groupStore.deleteGroup(id);
}

function updateGroup(newGroup) {
  groupStore.updateGroup(newGroup);
}

const draggableGroups = computed({
  get() {
    return groupStore.groups;
  },
  set(newValue) {
    groupStore.updateDragg(newValue);
  },
});
</script>

<template>
  <div class="tasks-group">
    <el-scrollbar class="tasks-group__scrollbox">
      <div
        class="tasks-group__scrollbox-inner"
        v-if="groupStore.groups.length > 0"
      >
        <VueDraggableNext
          v-model="draggableGroups"
          class="tasks-group__card-wrapper"
        >
          <TasksGroupsCard
            v-for="group in draggableGroups"
            :key="group._id"
            v-bind="group"
            @delete-group="deleteGroup"
            @update-group="updateGroup"
          />
        </VueDraggableNext>
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
