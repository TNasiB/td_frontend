import { defineStore } from "pinia";
import {
  fetchGroups,
  addGroup,
  deleteGroup,
  updateGroup,
  updateGroupsOrder,
} from "../service/rest/group";

export const useGroupStore = defineStore("group", {
  state: () => {
    return {
      groups: [],
    };
  },
  actions: {
    addGroup(group) {
      return addGroup(group).then(({ data }) => this.groups.unshift(data));
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
    updateDragg(newGroupArray) {
      updateGroupsOrder(newGroupArray);
    },
    setNewTaskOrder(taskArray, groupId) {
      const remarkedGroup = this.groups.find((group) => group._id === groupId);
      console.log(remarkedGroup);
      remarkedGroup.tasks = [...taskArray];
      this.updateGroup(remarkedGroup);
    },
  },
});
