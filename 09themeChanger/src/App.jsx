import { useEffect, useState } from 'react'
import { ThemeProvider } from './Contexts/Theme'
import './App.css'

function App() {
  const [thememode, setThememode] = useState('light')
 const lightTheme=()=>{
  setThememode('light')
 }
 const darkTheme =() =>{
  setThememode('dark')
 }

 //actual  vhange intheme 
 useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(thememode)
    
 },[thememode])

 
  return (
    
   <ThemeProvider value={{thememode,lightTheme,darkTheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            {/*themebtn*/}
                        </div>
    
                        <div className="w-full max-w-sm mx-auto">
                           {/*card */}
                        </div>
                    </div>
                </div>
   </ThemeProvider>
    
  )
}

export default App
