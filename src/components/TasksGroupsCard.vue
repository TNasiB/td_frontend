<script setup>
import { Delete, CirclePlus } from "@element-plus/icons-vue";
import TaskCard from "./TaskCard.vue";
import { useGroupStore } from "../stores/groups.js";
import { useTasksStore } from "../stores/tasks";
import draggable from "vuedraggable";
import { reactive, ref } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  _id: { type: String, required: true },
  tasks: { type: Array, required: true },
});

let formEnable = ref(false);
const taskForm = reactive({
  title: "",
  desc: "",
  groupId: props._id,
});

const emit = defineEmits(["close-modal1", "update-group", "delete-group"]);
const storeGroup = useGroupStore();

function updateGroup() {
  const { title, _id } = props;
  emit("update-group", { title, _id });
}

function createTask() {
  useTasksStore().addTask(taskForm);
}

function updateTasksOrder({ added }) {
  storeGroup.updateTaskOrder(added);
}

function addTask() {
  formEnable.value = !formEnable.value;
  !formEnable.value ? createTask() : "";
}

function log(value) {
  console.log(value);
}
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
            @click="storeGroup.deleteGroup(_id)"
            type="danger"
            :icon="Delete"
            circle
          />
        </div>
      </template>
      <draggable :list="tasks" group="task" @change="updateTasksOrder($event)">
        <template #item="{ element }">
          <TaskCard v-bind="element" itemKey="id" />
        </template>
      </draggable>
      <div class="group-card__control">
        <el-empty
          v-if="tasks.length === 0"
          image-size="80"
          description="No tasks"
        ></el-empty>
        <el-input
          placeholder="Title"
          v-model="taskForm.title"
          v-if="formEnable"
        ></el-input>
        <el-input
          type="textarea"
          placeholder="Description"
          v-model="taskForm.desc"
          v-if="formEnable"
        ></el-input>
        <el-button @click="addTask" :icon="CirclePlus" type="primary">{{
          formEnable ? "Create" : "Add task"
        }}</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.group-card {
  &__control {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  &__control .el-input,
  &__control .el-button {
    width: 100%;
  }
}

::v-deep .el-card__body {
  width: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.box-card {
  width: 320px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
