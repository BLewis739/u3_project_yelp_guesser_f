import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const SignIn = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = SignInUser(formValues)
    setFormValues({
      username: '',
      password: ''
    })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/gameplay')
  }

  return (
    <div className="signin-main">
      <h2>Sign In</h2>
      <div className="signin">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>
              Username:
              <input onChange={handleChange} type="text" name="username" />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Password:
              <input onCHange={handleChange} type="text" name="password" />
            </label>
          </div>
          <div className="button">
            <button disabled={!formValues.username && !formValues.password}>
              SIGN IN
            </button>
          </div>
        </form>
      </div>
      <div className="register-button">
        <h3>Dont have an account?</h3>
        <div className="button">
          <button
            onClick={() => {
              navigate('/register')
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
