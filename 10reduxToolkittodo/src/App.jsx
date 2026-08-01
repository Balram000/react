import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './features/Todo/Todo'

function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App