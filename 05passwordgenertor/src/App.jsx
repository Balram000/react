import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'


const App = () => {
  const [length, setLength] = useState(12)

  const [numberAllowed, setNumberAllowed] = useState(false)
  const [Charallowed, setCharallowed] = useState(true)
  const [password, setPassword] = useState("")
  // use ref hooks
  const passwordRef = useRef(null)
  const passwordGenertor = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (Charallowed) str += "!@#$%^&*()_+=-"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, Charallowed, numberAllowed, setPassword])

  useEffect(() => { passwordGenertor() }, [length, numberAllowed, Charallowed, passwordGenertor])

  
  const copyPwdtoClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-4'> passwordGenertor</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
            placeholder='password'
            value={password}
            readOnly
            ref={passwordRef}
            className='w-full outline-none px-3 py-2 bg-white text-black ' />
          <button onClick={copyPwdtoClipBoard} className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0 '>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length :{length}</label>


          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={Charallowed}
              id='charInput'
              onChange={() => {
                setCharallowed((prev) => !prev)
              }}
            /> <label htmlFor="charInput"> Characters </label>
          </div>
          <div className='flex items-right gap-x-2'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            /> <label htmlFor="numberInput"> Number </label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
