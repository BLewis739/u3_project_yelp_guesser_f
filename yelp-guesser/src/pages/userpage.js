import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Userpage = ({
  user,
  authenticated,
  userLeaderboardScores,
  setUserLeaderboardScores
}) => {
  let navigate = useNavigate()

  // const retrieveLeaderboard = async (userId) => {
  //   const userBoard = await GetFullUserLeaderboard(userId)
  //   setLeaderboardScores(userBoard)
  // }

  // const userIdString = user.id.toString()

  // useEffect(() => {
  //   retrieveLeaderboard(userIdString)
  // }, [])

  return user && authenticated ? (
    <div>
      <div className="your-scores">
        <h2>{user.username}'s High Scores</h2>
        <ol>
          {userLeaderboardScores.map((item) => (
            <li>
              <div className="points">{item.points}</div>
              <div className="date">{item.date}</div>
            </li>
          ))}
        </ol>
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
