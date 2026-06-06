import API from "../api/axios";

export const fetchTodos = async () => {
  return await API.get("/todos");
};

export const addTodo = async (todoData) => {
  return await API.post("/todos", todoData);
};

export const editTodo = async (id,todoData) => {
  return await API.put(`/todos/${id}`,todoData);
};

export const updateTodo = async (id) => {
  return await API.put(`/todos/${id}`);
};

export const deleteTodo = async (id) => {
  return await API.delete(`/todos/${id}`);
};


