import axios from 'axios'
import { useState, useEffect } from 'react'
import HowManyCatStars from '../components/HowManyCatsStars'
import catGuesser2 from '../images/catGuesser2.PNG'
import noStars from '../images/extra_large_0.png'
import oneStar from '../images/extra_large_1.png'
import oneHalfStar from '../images/extra_large_1_half.png'
import twoStars from '../images/extra_large_2.png'
import twoHalfStars from '../images/extra_large_2_half.png'
import threeStars from '../images/extra_large_3.png'
import threeHalfStars from '../images/extra_large_3_half.png'
import fourStars from '../images/extra_large_4.png'
import fourHalfStars from '../images/extra_large_4_half.png'
import fiveStar from '../images/extra_large_5.png'

const CatGuesser = (props) => {
  const [cat, setCat] = useState('')

  const getCat = async () => {
    const response = await axios.get(
      'http://api.thecatapi.com/v1/images/search',
      { params: { limit: 1 } }
    )
    // setCat = response.data[0].url
    console.log(response.data[0].url)
  }
  getCat()

  return (
    <div className="cat-guesser-wrapper">
      <div className="cat-guesser-logo">
        <img src={catGuesser2} alt="cat guesser" />
      </div>
    </div>
  )
}

export default CatGuesser
