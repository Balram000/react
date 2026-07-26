import { useState } from 'react';
import './App.css'

const MAX_COUNT = 20;
const MIN_COUNT = 0;

function App() {
  const [counter, setCounter] = useState(15)

  const addvalue = () => {
    setCounter((current) => (current < MAX_COUNT ? current + 1 : current))
  }

  const removevalue = () => {
    setCounter((current) => (current > MIN_COUNT ? current - 1 : current))
  }

  return (
    <>
      <h1>balram aur react </h1>
      <h2>counter value {counter} </h2>

      <button onClick={addvalue}> add value </button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
