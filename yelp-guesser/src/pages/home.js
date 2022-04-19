import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://64.media.tumblr.com/686d24331e77b60ee4e7afb475c14296/d50f06805c5dc827-a0/s540x810/d7f020833c2e4e4292d4f58dccac0762f28dee89.pnj"
            alt="yelp guesser"
          ></img>
        </div>
      </div>
      <div className="button">
        <button onClick={() => navigate('/login')}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Home
