import { useNavigate } from 'react-router-dom'

const Userpage = ({
  user,
  authenticated,
  userLeaderboardScores,
  setUserLeaderboardScores
}) => {
  let navigate = useNavigate()

  return user && authenticated ? (
    <div>
      <div className="your-scores">
        <h2>{user.username}'s Profile</h2>
        <div className="username">Username: {user.username}</div>
      </div>
    </div>
  ) : (
    <div className="no-no">
      <h3>Uh oh! You need to sign in to do that.</h3>
      <div className="button">
        <button onClick={() => navigate('/login')}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Userpage
