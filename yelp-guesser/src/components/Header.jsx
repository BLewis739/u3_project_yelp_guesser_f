import { Link } from 'react-router-dom'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
import playGameLogo from '../images/gamecontroller.png'
import leaderBoard from '../images/leaderboard.png'
import questionMark from '../images/questionmark.png'

const Header = (props) => {
  return (
    <header>
      <nav>
        <div id="navleft-box">
          <div className="nav">
            <Link to="/">
              <img id="nav-logo" src={yelpGuesserLogo} alt="yelp guesser" />
            </Link>
          </div>
          <div className="nav">
            <Link to="/quickplay">
              <img id="nav-gamelogo" src={playGameLogo} alt="yelp guesser" />
            </Link>
          </div>
          <div className="nav">
            <Link to="/scores">
              <img id="nav-scorelogo" src={leaderBoard} alt="yelp guesser" />
            </Link>
          </div>
        </div>
        <div id="navright-box">
          <div className="nav" id="nav-username">
            <Link to={props.user  ? "/userpage" : '/login'}>
              {props.user ? 'Welcome ' + props.user.username : 'sign in'}
            </Link>
          </div>
          <div className="nav">
            <Link to="/About">
              <img id="nav-aboutlogo" src={questionMark} alt="yelp guesser" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
