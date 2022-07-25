import makeRequest from "../makeRequest";

const url = "http://localhost:4000/api/group";

export const fetchGroups = () => {
  return makeRequest({
    url: "http://localhost:4000/api/group",
  });
};

export const addGroup = (data) =>
  makeRequest({
    method: "POST",
    url: "http://localhost:4000/api/group",
    data,
  });

export const deleteGroup = (id) =>
  makeRequest({
    method: "DELETE",
    url: `http://localhost:4000/api/group/${id}`,
  });

export const updateGroup = (data) =>
  makeRequest({
    method: "PUT",
    url: "http://localhost:4000/api/group",
    data,
  });

export const updateGroupOrder = (data) =>
  makeRequest({
    method: "PUT",
    url: url + "/order",
    data,
  });

export const updateTaskGroup = ({ element }) => {
  return makeRequest({
    method: "PUT",
    url: url + "/torder",
    data: element,
  });
};
