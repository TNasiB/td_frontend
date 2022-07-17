<script setup>
import { Delete } from "@element-plus/icons-vue";
import TaskCard from "./TaskCard.vue";

const props = defineProps({
  title: { type: String, required: true },
  _id: { type: String, required: true },
});
const emit = defineEmits(["close-modal1", "update-group"]);

function updateGroup() {
  const { title, _id } = props;
  emit("update-group", { title, _id });
}

const tasks = [
  {
    title: "Тестовая задача1",
    isCompleted: false,
  },
  {
    title: "Тестовая задача2",
    isCompleted: false,
  },
  {
    title: "Тестовая задача3",
    isCompleted: true,
  },
];
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
      <p class="task-wrapper__title-type">Uncompleted</p>
      <div class="task-wrapper uncompleted">
        <TaskCard v-for="task in tasks" :key="task.id" v-bind="task" />
      </div>
      <hr />
      <p class="task-wrapper__title-type">Completed</p>
      <div class="task-wrapper completed">
        <TaskCard v-for="task in tasks" :key="task.id" v-bind="task" />
      </div>
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
