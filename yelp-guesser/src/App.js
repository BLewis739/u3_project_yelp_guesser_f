import { Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import SignIn from './pages/signin'
import About from './pages/about'
import Gameplay from './pages/gameplay'
import Scores from './pages/scores'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/scores" element={<Scores />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
