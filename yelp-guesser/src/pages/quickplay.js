import HomePage from './HomePage'
import quickPlay from '../images/quicklogo.png'
import localPlay from '../images/localplay.png'
import globalPlay from '../images/worldplay.png'
const Quickplay = () => {
  return (
    <div id="game-page">
      <div className="game-select">
        <div className="gamebox" id="gamebox-one">
          <img id="local-img" src={localPlay} />
          <h1>Local Play</h1>
        </div>
        <div className="gamebox" id="gamebox-two">
          <img id="quick-img" src={quickPlay} />
          <h1>Quick Play</h1>
        </div>
        <div className="gamebox" id="gamebox-three">
          <img id="globe-img" src={globalPlay} />
          <h1>Global play</h1>
        </div>
      </div>
    </div>
  )
}

export default Quickplay
