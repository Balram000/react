import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15;
  const addvalue = () => {
    if (counter < 20)
      counter = counter + 1;
    setCounter(counter)
    console.log("add value ", counter);
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log(" remove value ", counter);
    }


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
