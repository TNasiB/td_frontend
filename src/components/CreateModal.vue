<template>
  <div class="create-modal">
    <el-dialog
      v-model="isModalOpen"
      :title="`Creating new ${type}...`"
      width="30%"
      :before-close="closeModal"
    >
      <div class="create-modal__main">
        <el-input
          v-model="form.title"
          type="input"
          placeholder="Please input title"
        />
        <el-input
          v-if="type === 'task'"
          v-model="form.desc"
          autosize
          type="textarea"
          placeholder="Please input description"
        />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="$emit('close-modal')">Cancel</el-button>
          <el-button type="primary" @click="createItem">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useTasksStore } from "../stores/tasks";

defineProps({
  isModalOpen: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    default: "",
    validator(type) {
      return ["task", "group"].includes(type);
    },
  },
});

const form = reactive({
  title: "",
  desc: "",
});

const emit = defineEmits(["close-modal1"]);

function closeModal() {
  console.log("in modal comp beforeclose");
  emit("close-modal1");
}

function createItem() {}
</script>

<style lang="scss" scoped>
.create-modal {
  &__main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
