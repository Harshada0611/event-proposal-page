import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './vendorSignin.css'

const vendorSigninURL = 'http://localhost:5000/vendor/signin'


function VendorSignin() {

  const navigate = useNavigate()

  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordErrMessage, setPasswordErrMessage] = useState('')

  //handle Password function
  const handleSigninPassword = (e) => {
    setPassword(e.target.value)
    setPasswordErrMessage('')
  }


  //styling when error in password
  const passwordErrorStyle = {
    border: (passwordErr === true) ? "1px solid red" : "1px solid #D1D1D1"
  }


  const onUserSignin = async () => {
    const userObj = { contact, password }
    try {
      toast.loading('Loading...')
      const response = await axios.post(vendorSigninURL, userObj)
      toast.dismiss()
      if (response.data.success) {
        //we have to store token in localStorage
        localStorage.setItem('token', (response.data.data.token))
        localStorage.setItem('vendorName', (response.data.data.name))
        navigate('/vendor')
      }
      else {
        setPasswordErr('Incorrect Password')
        toast.error(response.data.message)
      }
    }
    catch (err) {
      //hide loader
    }

  }


  return (
    <div className='signinBody'>
      <div className='signinbody-left'>
        <h1>TEXT WILL BE DISPLAYED HERE</h1>
      </div>
      <div className='signinbody-right'>
        <div className='signin-form-Wrapper'>
          <div className='form-navbar'>
            <div className='form-navbar-toggles'><h3 style={{ color: '#4E94F4' }} onClick={() => { navigate('/') }}>Vendor</h3></div>
            <div className='form-navbar-toggles'><h3 onClick={() => { navigate('/user-signin') }}>User</h3></div>
          </div>
          <div className='signin-form'>
            <h3 className='form-header'>Vendor SignIn</h3>
            <div className='form-input-fields'>
              <input type="email" placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
              <input type="password" placeholder='Password' value={password} onChange={handleSigninPassword} style={passwordErrorStyle} />
              {passwordErr && (<span className='signin-passwordError' style={{ color: 'red' }}>{passwordErrMessage}</span>)}
            </div>
            <div className='form-footer'>
              <p className='signin' onClick={() => { navigate('/vendor-registration') }}>Create new account</p>
              <button onClick={onUserSignin}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorSignin