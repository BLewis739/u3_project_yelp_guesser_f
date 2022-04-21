import axios from 'axios'
import { useState, useEffect } from 'react'
// import HowManyCatStars from '../components/HowManyCatStars'
import catGuesser2 from '../images/catGuesser2.PNG'

const CatGuesser = (props) => {
  return (
    <div className="cat-guesser-wrapper">
      <div className="cat-guesser-logo">
        <img src={catGuesser2} alt="cat guesser" />
      </div>
    </div>
  )
}

export default CatGuesser
