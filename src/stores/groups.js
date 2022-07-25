import { defineStore } from "pinia";
import {
  fetchGroups,
  addGroup,
  deleteGroup,
  updateGroup,
  updateGroupOrder,
  updateTaskGroup,
} from "../service/rest/group";

export const useGroupStore = defineStore("group", {
  state: () => {
    return {
      groups: [],
    };
  },
  actions: {
    addGroup(group) {
      return addGroup(group).then(({ data }) => this.groups.push(data));
    },
    fetchGroups() {
      return fetchGroups().then(({ data }) => (this.groups = data));
    },
    deleteGroup(id) {
      this.groups = this.groups.filter((group) => group._id !== id);
      deleteGroup(id);
    },
    updateGroup(newGroup) {
      updateGroup(newGroup).then(() => {
        Object.assign(
          this.groups.find((group) => group._id === newGroup._id),
          newGroup
        );
      });
    },
    updateGroupOrder() {
      updateGroupOrder(this.groups).then((data) => console.log(data));
    },
    updateTaskOrder(event) {
      this.groups.forEach((group) =>
        group.tasks.forEach((task) => (task.groupId = group._id))
      );
      updateTaskGroup(event);
    },
  },
});
