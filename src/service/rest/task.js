import makeRequest from "../makeRequest";

export const fetchTasks = () =>
  makeRequest({
    url: "http://localhost:4000/api/task",
  });

export const addTask = (data) =>
  makeRequest({
    url: "http://localhost:4000/api/task",
    method: "POST",
    data,
  });
