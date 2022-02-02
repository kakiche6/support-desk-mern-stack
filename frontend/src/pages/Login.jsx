import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const {email,password} = formData

  const onChange = e => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return <>
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Please login in to get support</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email"  className="form-control" 
            id='email'
            name='email'
            required
            value={email}
            onChange={onChange}
            placeholder='Enter your email'
          />
        </div>
        <div className="form-group">
          <input type="password"  className="form-control" 
            id='password'
            name='password'
            required
            value={password}
            onChange={onChange}
            placeholder='Enter your password'
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
  </>;
}

export default Login;