import { defineStore } from "pinia";

export const useGroupStore = defineStore("group", {
  state: () => {
    return {
      groups: [
        {
          title: "Todos",
        },
        {
          title: "Todos2",
        },
        {
          title: "Todos02",
        },
        {
          title: "Todos3",
        },
        {
          title: "Todos4",
        },
      ],
    };
  },
  actions: {
    addGroup(group) {
      this.groups.unshift(group);
    },
  },
});
