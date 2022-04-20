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
      <div className="carousel">
        <div className="img-wrapper">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fexps28800_UG143377D12_18_1b_RMS.jpg&f=1&nofb=1"
            alt="burger"
          ></img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.history.com%2F.image%2Ft_share%2FMTU4NTE1Nzg2MDcwMTA3Mzk0%2Fbeer-oldest.jpg&f=1&nofb=1"
            alt="bars"
          ></img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnomtasticfoods.net%2Fwp-content%2Fuploads%2F2017%2F10%2FThe-Baked-Bear-15-1440x1800.jpg&f=1&nofb=1"
            alt="ice cream"
          ></img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcok.net%2Fwp-content%2Fuploads%2F2018%2F07%2FIMG_20180613_150406_086-1024x1024.jpg&f=1&nofb=1"
            alt="vegan"
          ></img>
        </div>
      </div>
      <div id="hot-guess-box">
        <img id="hot-guess-img" src={hotGuessLogo} alt="hot guesses" />
      </div>
    </div>
  )
}

export default Home
