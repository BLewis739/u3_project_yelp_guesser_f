import { useState } from 'react'
import HomePage from './HomePage'
import quickPlay from '../images/quicklogo.png'
import localPlay from '../images/localplay.png'
import globalPlay from '../images/globelogo.webp'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Quickplay = () => {
  const [spinClassOne, setSpinClassOne] = useState(false)
  const [spinClassTwo, setSpinClassTwo] = useState(false)
  const [spinClassThree, setSpinClassThree] = useState(false)

  const [subtextClassOne, setSubtextClassOne] = useState(false)
  const [subtextClassTwo, setSubtextClassTwo] = useState(false)
  const [subtextClassThree, setSubtextClassThree] = useState(false)

  let navigate = useNavigate()

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
            onMouseOver={() => (
              setSubtextClassOne(true), setSpinClassOne(true)
            )}
            onMouseLeave={() => (
              setSubtextClassOne(false), setSpinClassOne(false)
            )}
            onClick={() => {
              navigate('/localplay')
            }}
          >
            Local Play
          </h1>
          <p
            id="local-subtext"
            className={subtextClassOne ? 'appear' : undefined}
          >
            Play with businesses in your backyard!
          </p>
        </div>
        <div className="gamebox" id="gamebox-two">
          <img
            id="quick-img"
            className={spinClassTwo ? 'spin' : undefined}
            src={quickPlay}
          />

          <h1
            className="game-page-text"
            onMouseOver={() => (
              setSubtextClassTwo(true), setSpinClassTwo(true)
            )}
            onMouseLeave={() => (
              setSubtextClassTwo(false), setSpinClassTwo(false)
            )}
            onClick={() => navigate('/quickgame')}
          >
            Quick Play
          </h1>
          <p
            id="quickplay-subtext"
            className={subtextClassTwo ? 'appear' : undefined}
          >
            Enter a zipcode and play!
          </p>
        </div>
        <div className="gamebox" id="gamebox-three">
          <img
            id="globe-img"
            className={spinClassThree ? 'spin' : undefined}
            src={globalPlay}
          />
          <h1
            className="game-page-text"
            onMouseOver={() => (
              setSubtextClassThree(true), setSpinClassThree(true)
            )}
            onMouseLeave={() => (
              setSubtextClassThree(false), setSpinClassThree(false)
            )}
            onClick={() => navigate('/globalplay')}
          >
            Global Play
          </h1>
          <p
            id="global-subtext"
            className={subtextClassThree ? 'appear' : undefined}
          >
            Play with businesses from around the world!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Quickplay
