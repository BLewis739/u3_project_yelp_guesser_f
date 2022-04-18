import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    zipcode: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    RegisterUser({
      username: formValues.username,
      password: formValues.password,
      zipcode: formValues.zipcode
    })
    setFormValues({
      username: '',
      password: '',
      confirmPassword: '',
      zipcode: ''
    })
    navigate('/signin')
  }

  return (
    <div className="register-wrapper">
      <h2>Welcome to Yelp Guesser!</h2>
      <div className="register">
        <h3>Create an Account</h3>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>
              Username:
              <input onChange={handleChange} type="text" name="username" />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Password:
              <input onChange={handleChange} type="text" name="password" />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Confirm Password:
              <input
                onChange={handleChange}
                type="text"
                name="confirmPassword"
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Zipcode:
              <input onChange={handleChange} type="text" name="zipcode" />
            </label>
          </div>
          <div className="button">
            <button
              disabled={
                (!formValues.username && !formValues.zipcode) ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
