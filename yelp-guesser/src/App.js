import { Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <main>
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
        </main>
      </header>
    </div>
  )
}

export default App
