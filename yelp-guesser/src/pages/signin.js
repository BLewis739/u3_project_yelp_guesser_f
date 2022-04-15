import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const SignIn = () => {
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
    SignInUser({
      username: formValues.username,
      password: formValues.password
    })
    setFormValues({
      username: '',
      password: ''
    })
    navigate('/gameplay')
  }

  return (
    <div>
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
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
