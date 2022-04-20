import { Link } from 'react-router-dom'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
import playGameLogo from '../images/gamecontroller.png'
import leaderBoard from '../images/leaderboard.png'
import questionMark from '../images/questionmark.png'
import strawberry from '../images/strawberry.png'
import pear from '../images/pear.png'
import orange from '../images/orange.png'
import {
  GetFullWorldLeaderboard
} from '../services/Leaderboard'
import { useEffect } from 'react'

const Header = (props) => {

  const retrieveWorldLeaderboard = async () => {
    const worldBoard = await GetFullWorldLeaderboard()
    props.setWorldLeaderboardScores(worldBoard)
  }

  useEffect(() => {
    retrieveWorldLeaderboard()
  }, [])

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
              <img id="nav-scorelogo" src={leaderBoard} alt="yelp guesser"/>
            </Link>
          </div>
        </div>
        <div id="navright-box">
          <div className='nav' id="fruit">
            <div className="accordian horizontal">
            <img src={strawberry} alt='strawberry' onClick=""></img>
            <img src={pear} alt='pear' onClick=""></img>
            <img src={orange} alt='orange' onClick=''></img>
            </div>
          </div>
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
