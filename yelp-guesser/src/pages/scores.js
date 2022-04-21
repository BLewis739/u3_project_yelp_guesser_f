import { useEffect } from 'react'
import {
  GetFullWorldLeaderboard,
  GetFullUserLeaderboard
} from '../services/Leaderboard'

const Scores = ({
  user,
  authenticated,
  worldLeaderboardScores,
  userLeaderboardScores,
  setWorldLeaderboardScores,
  setUserLeaderboardScores
}) => {
  const retrieveWorldLeaderboard = async () => {
    const worldBoard = await GetFullWorldLeaderboard()
    localStorage.setItem('worldBoard', JSON.stringify(worldBoard))
    setWorldLeaderboardScores(worldBoard)
  }

  useEffect(() => {
    retrieveWorldLeaderboard()
  }, [])

  const retrieveUserLeaderboard = async (userId) => {
    const userBoard = await GetFullUserLeaderboard(userId)
    setUserLeaderboardScores(userBoard)
    localStorage.setItem('userBoard', JSON.stringify(userBoard))
  }

  const userIdString = user.id.toString()

  useEffect(() => {
    retrieveUserLeaderboard(userIdString)
  }, [])

  const showWorldLeaderboard = () => {}

  return user && authenticated ? (
    <div className="scores-wrapper">
      <div className="your-scores">
        <h2>{user.username}'s High Scores</h2>
        <button>Show scores</button>
        <ol>
          {/*
          {userLeaderboardScores.map((item) => (
            <li>
              <div className="points">{item.points}</div>
              <div className="date">{item.date}</div>
            </li>
          ))}*/}
        </ol>
      </div>

      <div className="leader-scores">
        <h2>World Leaderboard</h2>
        <button>Show Scores</button>
        <ol>
          {/*<li>
            <div className="points">{worldLeaderboardScores[0].points}</div>
            <div className="username">{worldLeaderboardScores[0].username}</div>
            <div className="date">{worldLeaderboardScores[0].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[1].points}</div>
            <div className="username">{worldLeaderboardScores[1].username}</div>
            <div className="date">{worldLeaderboardScores[1].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[2].points}</div>
            <div className="username">{worldLeaderboardScores[2].username}</div>
            <div className="date">{worldLeaderboardScores[2].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[3].points}</div>
            <div className="username">{worldLeaderboardScores[3].username}</div>
            <div className="date">{worldLeaderboardScores[3].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[4].points}</div>
            <div className="username">{worldLeaderboardScores[4].username}</div>
          <div className="date">{worldLeaderboardScores[4].date}</div>
          </li>*/}
        </ol>
      </div>
    </div>
  ) : (
    <div>
      <div className="leader-scores">
        <h2>World Leaderboard</h2>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  )
}

export default Scores
