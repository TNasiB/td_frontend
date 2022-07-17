import { defineStore } from "pinia";
import { addTask, fetchTasks } from "../service/rest/task";
export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [],
    };
  },

  actions: {
    fetchTasks() {
      fetchTasks().then(({ data }) => (this.tasks = [...data]));
    },
    addTask(task) {
      return addTask(task).then(({ data }) => this.tasks.push(data));
    },
  },
});
