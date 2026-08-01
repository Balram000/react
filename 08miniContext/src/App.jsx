
import './App.css'
import Login from './component/Login/Login.jsx'
import Profile from './component/Profile/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Balram </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App