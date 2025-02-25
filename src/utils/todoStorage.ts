import { TodoItem } from "../components/TodoItem/TodoItem"; 

export const getLocalTodos = (): TodoItem[] => {
  const localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [];
};

export const saveLocalTodos = (todos: TodoItem[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};