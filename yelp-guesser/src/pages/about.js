const About = () => {
  return (
    <div className="about">
      <h2>About Yelp Guesser</h2>
      <div className="dev-wrapper">
        <div className="dev-card">
          <img
            src="https://avatars.githubusercontent.com/u/98563678?v=4"
            alt="Nick Lopez"
          ></img>
          <h3 className="dev-name">Nick Lopez</h3>
          <a href="https://github.com/nicklope">Check out Nick's Github</a>
          <p>Blurb about Nick</p>
        </div>

        <div className="dev-card">
          <img
            src="https://avatars.githubusercontent.com/u/91275413?v=4"
            alt="Brad and his cat Pancake"
          ></img>
          <h3 className="dev-name">Brad Lewis</h3>
          <a href="https://github.com/BLewis739">Check out Brad's Github</a>
          <p>Blurb about Brad</p>
        </div>

        <div className="dev-card">
          <img
            src="https://64.media.tumblr.com/8d7983694a96750d4d02d972a3e2a34e/1ed6c09361f8ddf1-12/s540x810/9d3cc5cb10b317d35167ad99ca912ba24f9efd87.jpg"
            alt="Mily"
          ></img>
          <h3 className="dev-name">Mily Wendland</h3>
          <a href="https://github.com/milywendland">Check out Mily's Github</a>
          <p>Blurb about Mily</p>
        </div>
      </div>
    </div>
  )
}

export default About
