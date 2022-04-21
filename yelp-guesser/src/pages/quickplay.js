import { useState } from 'react'
import HomePage from './HomePage'
import quickPlay from '../images/quicklogo.png'
import localPlay from '../images/localplay.png'
import globalPlay from '../images/globelogo.webp'
import { useEffect } from 'react'
const Quickplay = () => {
  const [spinClassOne, setSpinClassOne] = useState(false)
  const [spinClassTwo, setSpinClassTwo] = useState(false)
  const [spinClassThree, setSpinClassThree] = useState(false)
  return (
    <div id="game-page">
      <div className="game-select">
        <div className="gamebox" id="gamebox-one">
          <img
            id="local-img"
            className={spinClassOne ? 'spin' : undefined}
            src={localPlay}
          />
          <h1
            className="game-page-text"
            onMouseOver={() => setSpinClassOne(true)}
            onMouseLeave={() => setSpinClassOne(false)}
          >
            Local Play
          </h1>
        </div>
        <div className="gamebox" id="gamebox-two">
          <img
            id="quick-img"
            className={spinClassTwo ? 'spin' : undefined}
            src={quickPlay}
          />
          <h1
            className="game-page-text"
            onMouseOver={() => setSpinClassTwo(true)}
            onMouseLeave={() => setSpinClassTwo(false)}
          >
            Quick Play
          </h1>
        </div>
        <div className="gamebox" id="gamebox-three">
          <img
            id="globe-img"
            className={spinClassThree ? 'spin' : undefined}
            src={globalPlay}
          />
          <h1
            className="game-page-text"
            onMouseOver={() => setSpinClassThree(true)}
            onMouseLeave={() => setSpinClassThree(false)}
          >
            Global Play
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Quickplay
