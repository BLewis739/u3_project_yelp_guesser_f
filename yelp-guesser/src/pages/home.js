import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import hotGuessLogo from '../images/hot-guesses.png'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      <div className="wrapper">
        <div className="logo">
          <img
            id="main-logo-landing"
            src={yelpGuesserLogo}
            alt="yelp guesser"
          />
        </div>
      </div>
      <div id="hot-guess-box">
        <img id="hot-guess-img" src={hotGuessLogo} alt="hot guesses" />
      </div>
    </div>
  )
}

export default Home
