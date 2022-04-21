const Scores = ({
  user,
  authenticated,
  worldLeaderboardScores,
  userLeaderboardScores
}) => {
  return user && authenticated ? (
    <div className="scorepage">
      <div className="scores-wrapper">
        <div id="scorebox-one" className="score-box">
          <h2>{user.username}'s High Scores</h2>
          <ol></ol>
        </div>

        <div id="scorebox-two" className="score-box">
          <h2>Best this month?</h2>
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>

        <div id="scorebox-three" className="score-box">
          <h2>World Leaderboard</h2>
          <ol></ol>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div id="scorebox-three" className="leader-scores">
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
