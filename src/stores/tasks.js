import { defineStore } from "pinia";
import { addTask, fetchTasks } from "../service/rest/task";
import { useGroupStore } from "./groups.js";

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
      console.log(task);
      return addTask(task).then(({ data }) => {
        useGroupStore()
          .groups.find((group) => data.groupId === group._id)
          .tasks.push(data);
        this.tasks.push(data);
      });
    },
  },
});
