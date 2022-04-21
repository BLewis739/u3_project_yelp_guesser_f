const FinalScore = (props) => {
  return (
    <div>
  <h1>Final Score!</h1>
  <h2>{props.score}</h2>
  <h2>{props.user.username}</h2>
  <button
    id="next-button"
    onClick={() => {
      props.setRound(0)
      props.setScore(0)
      props.setCountDown(3)
    }}
  >
    next
  </button>
  </div>
  )
}
export default FinalScore