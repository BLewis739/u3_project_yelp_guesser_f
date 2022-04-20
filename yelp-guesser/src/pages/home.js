import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      <div className="wrapper">
        <div className="logo">
          <img src={yelpGuesserLogo} alt="yelp guesser" />
        </div>
      </div>
      <div className="button">
        <button onClick={() => navigate('/login')}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Home
