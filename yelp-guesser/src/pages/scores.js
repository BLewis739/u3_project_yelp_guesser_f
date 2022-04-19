const Scores = ({ user, authenticated }) => {
  return user && authenticated ? (
    <div className="scores-wrapper">
      <div className="your-scores">
        <h2>{user.username}'s High Scores</h2>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>

      <div className="zip-leader">
        <h2>Area Leaderboard</h2>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>

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
