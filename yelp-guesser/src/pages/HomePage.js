import { useState, useEffect } from 'react'
import axios from 'axios'
import HowManyStars from '../components/HowManyStars'
import HowManyDollarSigns from '../components/HowManyDollarSigns'
import HowManyStarsReview from '../components/HowManyStarsReview'
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
import noDollars from '../images/nodollars.png'
import oneDollar from '../images/onedollar.png'
import twoDollars from '../images/twodollars.png'
import threeDollars from '../images/threedollars.png'
import fourDollars from '../images/fourdollars.png'

const HomePage = () => {
  ////                   ////
  //// State & Variables ////
  ////                   ////

  const [businesses, setBusinesses] = useState([])

  const [startState, setStart] = useState(0)

  const [roundQuestion, setRoundQuestion] = useState(0)

  const [review, setReview] = useState(undefined)

  const [reviewRating, setReviewRating] = useState(0)

  const [reviewBoolean, toggleReviewBoolean] = useState(false)

  const [starCount, setStarCount] = useState(noStars)

  const [dollarCount, setDollarCount] = useState(noDollars)

  const [choice, setChoice] = useState(undefined)

  const [playerChoice, setPlayerChoice] = useState(0)

  const [randomBusiness, setRandomBusiness] = useState(
    parseInt(Math.random() * (50 - 0) + 0)
  )
  const [score, setScore] = useState(0)

  const [flare, setFlare] = useState(undefined)

  const [flareAnimation, setFlareAnimation] = useState('flareAnimationStop')

  const [business, setBusiness] = useState({
    name: '',
    image: '',
    rating: '',
    price: '',
    id: '',
    review: '',
    reviewScore: ''
  })

  let zipCode = 'miami'

  ////           ////
  //// Functions ////
  ////           ////

  const getBusinesses = async (zipCode) => {
    let res = await axios.get(`http://localhost:3001/businesses${zipCode}`)
    console.log(res.data.businesses)
    setBusinesses(res.data.businesses)
  }

  const getBusinessReview = async (id) => {
    let res = await axios.get(`http://localhost:3001/businessreviews/${id}`)
    let random = parseInt(Math.random() * (1 - 0) + 0)
    console.log(res.data.reviews.reviews[random])
    setReview(res.data.reviews.reviews[random].text)
    setReviewRating(res.data.reviews.reviews[random].rating)
    toggleReviewBoolean(true)
  }

  const setRoundBusiness = async () => {
    ////////////////////////////////////////
    /////// business state set here ///////
    ///////////////////////////////////////

    setBusiness({
      name: businesses[randomBusiness].name,
      image: businesses[randomBusiness].image_url,
      rating: businesses[randomBusiness].rating,
      price: businesses[randomBusiness].price,
      id: businesses[randomBusiness].id,
      review: '',
      reviewRating: ''
    })
  }

  const checkScore = (playerChoice) => {
    let prevScore = score
    let prevRound = startState
    console.log('checking...')
    console.log(
      'player: ' + playerChoice,
      'business: ' + businesses[randomBusiness].rating,
      'prev score: ' + prevScore,
      'price: ' + businesses[randomBusiness].price,
      'flare: ' + flare
    )
    if (
      playerChoice - businesses[randomBusiness].rating === 0 ||
      businesses[randomBusiness].rating - playerChoice === 0
    ) {
      setScore(prevScore + 100)
      setFlare('Perfect!')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 0.5 ||
      businesses[randomBusiness].rating - playerChoice === 0.5
    ) {
      setScore(prevScore + 50)
      setFlare('Great!')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 1 ||
      businesses[randomBusiness].rating - playerChoice === 1
    ) {
      setScore(prevScore + 30)
      setFlare('Good!')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 1.5 ||
      businesses[randomBusiness].rating - playerChoice === 1.5
    ) {
      setScore(prevScore + 20)
      setFlare('Eh...')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 2 ||
      businesses[randomBusiness].rating - playerChoice === 2
    ) {
      setScore(prevScore + 20)
      setFlare('Eh...')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 2.5 ||
      businesses[randomBusiness].rating - playerChoice === 2.5
    ) {
      setScore(prevScore + 15)
      setFlare('Bad...')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 3 ||
      businesses[randomBusiness].rating - playerChoice === 3
    ) {
      setScore(prevScore + 10)
      setFlare('Bad...')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 3.5 ||
      businesses[randomBusiness].rating - playerChoice === 3.5
    ) {
      setScore(prevScore + 5)
      setFlare('Terrible...')
    }
    if (
      playerChoice - businesses[randomBusiness].rating === 4 ||
      businesses[randomBusiness].rating - playerChoice === 4
    ) {
      setScore(prevScore + 1)
      setFlare('Garbage...')
    }
    if (
      playerChoice === '$' &&
      playerChoice === businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('Cheap :)')
    }
    if (
      playerChoice === '$$' &&
      playerChoice === businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('Two Dolla Bill :)')
    }
    if (
      playerChoice === '$$$' &&
      playerChoice === businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('Fancy :)')
    }
    if (
      playerChoice === '$$$$' &&
      playerChoice === businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('Pricey :)')
    }
    if (
      playerChoice !== businesses[randomBusiness].price &&
      playerChoice !== 1 &&
      playerChoice !== 1.5 &&
      playerChoice !== 2 &&
      playerChoice !== 2.5 &&
      playerChoice !== 3 &&
      playerChoice !== 3.5 &&
      playerChoice !== 4 &&
      playerChoice !== 4.5 &&
      playerChoice !== 5
    ) {
      setFlare('lol no')
    }
  }
  const checkReviewScore = (playerChoice) => {
    let prevScore = score
    console.log('checking review score...')
    console.log(
      'player: ' + playerChoice,
      'review rating: ' + reviewRating,
      'prev score: ' + prevScore,

      'flare: ' + flare
    )
    if (
      playerChoice - reviewRating === 0 ||
      reviewRating - playerChoice === 0
    ) {
      setScore(prevScore + 100)
      setFlare('Perfect!')
    }
    if (
      playerChoice - reviewRating === 0.5 ||
      reviewRating - playerChoice === 0.5
    ) {
      setScore(prevScore + 50)
      setFlare('Great!')
    }
    if (
      playerChoice - reviewRating === 1 ||
      reviewRating - playerChoice === 1
    ) {
      setScore(prevScore + 30)
      setFlare('Good!')
    }
    if (
      playerChoice - reviewRating === 1.5 ||
      reviewRating - playerChoice === 1.5
    ) {
      setScore(prevScore + 20)
      setFlare('Eh...')
    }
    if (
      playerChoice - reviewRating === 2 ||
      reviewRating - playerChoice === 2
    ) {
      setScore(prevScore + 20)
      setFlare('Eh...')
    }
    if (
      playerChoice - reviewRating === 2.5 ||
      reviewRating - playerChoice === 2.5
    ) {
      setScore(prevScore + 15)
      setFlare('Bad...')
    }
    if (
      playerChoice - reviewRating === 3 ||
      reviewRating - playerChoice === 3
    ) {
      setScore(prevScore + 10)
      setFlare('Bad...')
    }
    if (
      playerChoice - reviewRating === 3.5 ||
      reviewRating - playerChoice === 3.5
    ) {
      setScore(prevScore + 5)
      setFlare('Terrible...')
    }
    if (playerChoice - reviewRating === 4 || reviewRating === 4) {
      setScore(prevScore + 1)
      setFlare('Garbage...')
    }
  }

  const playerChoiceConverter = (choice) => {
    switch (choice) {
      case oneStar:
        setPlayerChoice(1)
        break
      case oneHalfStar:
        setPlayerChoice(1.5)
        break
      case twoStars:
        setPlayerChoice(2)
        break
      case twoHalfStars:
        setPlayerChoice(2.5)
        break
      case threeStars:
        setPlayerChoice(3)
        break
      case threeHalfStars:
        setPlayerChoice(3.5)
        break
      case fourStars:
        setPlayerChoice(4)
        break
      case fourHalfStars:
        setPlayerChoice(4.5)
        break
      case fiveStar:
        setPlayerChoice(5)
        break
      case oneDollar:
        setPlayerChoice('$')
        break
      case twoDollars:
        setPlayerChoice('$$')
        break
      case threeDollars:
        setPlayerChoice('$$$')
        break
      case fourDollars:
        setPlayerChoice('$$$$')
        break
    }
  }
  const setRound = async (start) => {
    if (businesses !== []) {
      setStart(start)
      setRoundQuestion(parseInt(Math.random() * (4 - 1) + 1))
      setChoice(undefined)
      setStarCount(noStars)
      setRandomBusiness(parseInt(Math.random() * (50 - 0) + 0))

      if (reviewBoolean) {
        checkReviewScore(playerChoice)
        toggleReviewBoolean(false)
      } else if (!reviewBoolean) checkScore(playerChoice)

      await setRoundBusiness()
    }
  }

  ////            ////
  //// useEffect  ////
  ////            ////

  useEffect(() => {
    getBusinesses(zipCode)
  }, [])

  ////        ////
  //// Render ////
  ////        ////

  switch (startState) {
    //  Case 0 //

    case 0:
      return (
        <div>
          <h1>Yelp Guesser</h1>
          <button
            onClick={() => {
              setRound(1)
              setScore(0)
            }}
          >
            Start Game
          </button>
        </div>
      )

    // Case 1 //

    case 1:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(2)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 2 //

    case 2:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(3)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 3 //

    case 3:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(4)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 4 //

    case 4:
      return (
        <div>
          <div className="star-button-box">
            <HowManyDollarSigns
              choice={choice}
              setChoice={setChoice}
              business={business}
              dollarCount={dollarCount}
              setDollarCount={setDollarCount}
              playerChoiceConverter={playerChoiceConverter}
              setRoundBusiness={setRoundBusiness}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(5)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 5 //

    case 5:
      return (
        <div>
          <div className="star-button-box">
            <HowManyDollarSigns
              choice={choice}
              setChoice={setChoice}
              business={business}
              dollarCount={dollarCount}
              setDollarCount={setDollarCount}
              playerChoiceConverter={playerChoiceConverter}
              setRoundBusiness={setRoundBusiness}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(6)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 6 //

    case 6:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStarsReview
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
              getBusinessReview={getBusinessReview}
              review={review}
              setReview={setReview}
              reviewBoolean={reviewBoolean}
              toggleReviewBoolean={toggleReviewBoolean}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(7)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 7 //

    case 7:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(8)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 8 //

    case 8:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(9)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 9 //

    case 9:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(10)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 10 //

    case 10:
      return (
        <div>
          <div className="star-button-box">
            <HowManyDollarSigns
              choice={choice}
              setChoice={setChoice}
              business={business}
              dollarCount={dollarCount}
              setDollarCount={setDollarCount}
              playerChoiceConverter={playerChoiceConverter}
              setRoundBusiness={setRoundBusiness}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(11)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 11 //

    case 11:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(12)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    // Case 12 //

    case 12:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStarsReview
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
              getBusinessReview={getBusinessReview}
              review={review}
              setReview={setReview}
              reviewBoolean={reviewBoolean}
              toggleReviewBoolean={toggleReviewBoolean}
            />
            <h3 id="flare" className={flareAnimation}>
              {flare}
            </h3>
            <h1>{score}</h1>
            <button
              id="next-button"
              onClick={() => {
                setRound(13)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            >
              next
            </button>
          </div>
        </div>
      )

    case 13:
      return (
        <div>
          <h1>Final Score!</h1>
          <h2>{score}</h2>
          <button
            id="next-button"
            onClick={() => {
              setRound(0)
              setScore(0)
            }}
          >
            next
          </button>
        </div>
      )
  }
}
export default HomePage
