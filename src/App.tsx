import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'
import { useTodos } from './useTodo';

import './App.css'

export function App() {
  const { todos, actualTusk, handleCreate, handleChange, handleDeleteTodoItem, handleDeleteDoneTodos } = useTodos();

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
