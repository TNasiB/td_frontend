import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [
        {
          title: "test",
          desc: "test",
        },
      ],
    };
  },

  actions: {
    addTask(task) {
      this.tasks.unshift(task);
    },
  },
});
