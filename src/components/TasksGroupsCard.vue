<script setup>
import { Delete } from "@element-plus/icons-vue";
import TaskCard from "./TaskCard.vue";
import { useGroupStore } from "../stores/groups.js";
import { computed } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

const props = defineProps({
  title: { type: String, required: true },
  _id: { type: String, required: true },
  tasks: { type: Array, required: true },
});
const emit = defineEmits(["close-modal1", "update-group"]);

function updateGroup() {
  const { title, _id } = props;
  emit("update-group", { title, _id });
}
const storeGroup = useGroupStore();

const TaskGroup = computed({
  get() {
    return props.tasks;
  },
  set(newValue) {
    storeGroup.setNewTaskOrder(newValue, props._id);
  },
});
</script>

<template>
  <div class="group-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-input
            v-model="title"
            @change="updateGroup"
            class="group-card__title"
          >
          </el-input>
          <el-button
            @click="$emit('delete-group', _id)"
            type="danger"
            :icon="Delete"
            circle
          />
        </div>
      </template>
      <VueDraggableNext v-model="TaskGroup" class="task-wrapper">
        <TaskCard v-for="task in TaskGroup" :key="task.id" v-bind="task" />
      </VueDraggableNext>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.box-card {
  width: 320px;
  min-width: 320px;
}

.task-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title-type {
    font-weight: 700;
    text-align: center;
  }
}
</style>
