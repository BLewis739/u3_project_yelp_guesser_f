import { Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import About from './pages/about'
import Gameplay from './pages/gameplay'
import Scores from './pages/scores'
import Header from './components/Header'
import Quickplay from './pages/quickplay'
import Home from './pages/home'
import Userpage from './pages/userpage'
import { CheckSession } from './services/Auth'
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/gameplay"
            element={<Gameplay user={user} authenticated={authenticated} />}
          />
          <Route
            path="/scores"
            element={<Scores user={user} authenticated={authenticated} />}
          />
          <Route path="/quickplay" element={<Quickplay />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/userpage"
            element={<Userpage user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
