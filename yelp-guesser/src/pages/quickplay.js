import HomePage from './HomePage'
import quickPlay from '../images/quickplay-landing.png'
const Quickplay = () => {
  return (
    <div className="quickplay">
      <img id="quickplay-image" src={quickPlay} />
      <HomePage />
    </div>
  )
}

export default Quickplay
