import { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem';

import './App.css'

const getLocalTodos = () => {
  const localData = localStorage.getItem("todos")
  return localData ? JSON.parse(localData) : null 
}

const saveLocalTodos = (todos: TodoItem []) => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function App() {
  const [todos, setTodos] = useState<TodoItem []>(() => {
    return getLocalTodos() ? getLocalTodos() : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [actualTusk, setActualTusk] = useState(todos.filter(item => item.done == false).length)

  useEffect(() => {
    setActualTusk(todos.filter(item => item.done == false).length)
  }, [todos]);

  const handleCreate = (value: string) => {
    const newTodoItem: TodoItem = {id: String(new Date()), value: value, done: false}
    const newTodos = [...todos, newTodoItem]
    setTodos(newTodos)
    saveLocalTodos(newTodos)
  } 

  const handleChange = ({id, value, done}: TodoItem) => {
    const newTodos = todos.map(item => (item.id == id ? {id, value, done} : item))
    setTodos(newTodos)
    saveLocalTodos(newTodos)
  }

  const handleDeleteTodoItem = (id: string) => {
    const newTodos = todos.filter(item => (item.id !== id))
    setTodos(newTodos)
    saveLocalTodos(newTodos)
  }

  const handleDeleteDoneTodos = () => {
    const newTodos = todos.filter(item => (item.done == false))
    setTodos(newTodos)
    saveLocalTodos(newTodos)
  }

  return (
    <>
      <h1>todos</h1>
      <p className='descr'>Актуальных задач: {actualTusk}</p>
      <TodoForm handleCreate={handleCreate}/>
      <TodoList todoList={todos} onChange={handleChange} onDelete={handleDeleteTodoItem}/>
      <button className='clearButton' onClick={handleDeleteDoneTodos}>Очистить выполненные</button>
    </>
  )
}

export default App
