import { useState } from 'react'
import './App.css';

export default function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addToto = () => {
    const todoElement = <div key={todos.length}>
      {newTodo}
      <button onClick={() => removeTodo(todos.length)}>x</button>
    </div>
    setTodos([...todos, todoElement])
    setNewTodo('')
  }

  const removeTodo = todoIndex => {
    const newTodos = todos.filter(e => e !== todos[todoIndex])
    setTodos(newTodos)
  }

  const handleTodoForm = event => {
    event.preventDefault()
    setNewTodo(event.target.value)
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <input type="text" value={newTodo} onChange={handleTodoForm}></input>
      <button onClick={addToto}>+</button>
      <div>{todos}</div>
    </div>
  )
}
