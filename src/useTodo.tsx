import { useState, useEffect } from "react"
import { TodoItem } from "./components/TodoItem/TodoItem" 
import { getLocalTodos, saveLocalTodos } from "./utils/todoStorage"

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoItem[]>(getLocalTodos)
  const [actualTusk, setActualTusk] = useState(0)

  useEffect(() => {
    saveLocalTodos(todos)
    setActualTusk(todos.filter((item) => !item.done).length)
  }, [todos])

  const handleCreate = (value: string) => {
    const newTodo: TodoItem = { id: String(Date.now()), value, done: false }
    setTodos([...todos, newTodo])
  }

  const handleChange = (updatedTodo: TodoItem) => {
    setTodos(todos.map((item) => (item.id === updatedTodo.id ? updatedTodo : item)))
  }

  const handleDeleteTodoItem = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const handleDeleteDoneTodos = () => {
    setTodos(todos.filter((item) => !item.done))
  }

  return {
    todos,
    actualTusk,
    handleCreate,
    handleChange,
    handleDeleteTodoItem,
    handleDeleteDoneTodos,
  }
}