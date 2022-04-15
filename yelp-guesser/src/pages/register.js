import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    zipcode: '',
  })


  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  

  const handleSubmit = (e) => {
   e.preventDefault()
   await RegisterUser({
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
    <div className="register">
      <h2>Create an Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input onChange={handleChange} type="text" name="username" />
        </label>

        <label>
          Password:
          <input onChange={handleChange} type="text" name="password" />
        </label>

        <label>
          Confirm Password:
          <input onChange={handleChange} type="text" name="confirmPassword" />
        </label>

        <label>
          Zipcode:
          <input onChange={handleChange} type="text" name="zipcode" />
        </label>
      </form>
    </div>
  )
}

export default Register