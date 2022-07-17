import { defineStore } from "pinia";
import {
  fetchGroups,
  addGroup,
  deleteGroup,
  updateGroup,
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
      fetchGroups().then(({ data }) => (this.groups = data));
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
  },
});
