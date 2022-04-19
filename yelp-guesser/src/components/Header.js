import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav">
          <Link to="/">Home</Link>
        </div>
        <div className="nav">
          <Link to="/gameplay">Game</Link>
        </div>
        <div className="nav">
          <Link to="/scores">Leaderboard</Link>
        </div>
        <div className="nav">
          <Link to="/About">About</Link>
        </div>
        <div className="nav">
          <Link to="/quickplay">Quickplay</Link>
        </div>
        <div className="nav">
          <Link to="/userpage">Profile</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header