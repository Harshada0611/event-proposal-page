import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../helpers/axios'
import toast from 'react-hot-toast';
import './userRegistration.css'


const userRegistrationURL = '/user/registration'

function UserRegistration() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordErrMessage, setPasswordErrMessage] = useState('')

  //handle Password function
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordErrMessage('')
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    setPasswordErrMessage('')
  }

  //styling when error in form fields
  const passwordErrorStyle = {
    border: (password !== confirmPassword) ? "1px solid red" : "1px solid #D1D1D1"
  }


  //on submit registration button
  const userRegistrationBtn = async () => {
    if (name === "" || email === "" || contact === "" || password === "" || confirmPassword === "") {
      toast.error('Empty form fields not allowed')
    }
    else if (password.length >= 1 && password.length < 5) {
      toast.error()
    }
    if (password === confirmPassword) {
      const userDetails = { name, email, contact, password, confirmPassword }
      try {
        const response = await axios.post(userRegistrationURL, userDetails)
        if (response.data.status) {
          navigate('/user-signin')
          toast.success(response.data.message)
        }
        else {
          navigate('/user-signin')
          toast.success(response.data.message)
        }
      }
      catch (err) {
        console.log(err)
        const { response } = err;
        if (Array.isArray(response.data.message)) {
          toast.error(response.data.message[0].msg)
        } else {
          toast.error(response.data.message)
        }
      }
    }
    else {
      setPasswordErr(true)
      setPasswordErrMessage(`  Password dosent match`)
    }
  }


  return (
    <>
      <div className='registrationBody'>
        <div className='registrationbody-left'>
          <h1>TEXT WILL BE DISPLAYED HERE</h1>
        </div>
        <div className='registrationbody-right'>

          <div className='registration-form-Wrapper'>
            <div className='form-navbar'>
              <div className='form-navbar-toggles'><h3 onClick={() => { navigate('/vendor-registration') }}>Vendor</h3></div>
              <div className='form-navbar-toggles'><h3 style={{ color: '#4E94F4' }} onClick={() => { navigate('/user-registration') }}>User</h3></div>
            </div>
            <div className='registration-form'>
              <h3 className='form-header'>Create new user account</h3>
              <div className='form-input-fields'>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={handlePassword} style={passwordErrorStyle} />
                <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPassword} style={passwordErrorStyle} />
                {passwordErr && (<span className='register-passwordError' style={{ color: 'red' }}>{passwordErrMessage}</span>)}
              </div>
              <div className='form-footer'>
                <p className='signin' onClick={() => { navigate('/user-Signin') }}>Sign In</p>
                <button onClick={userRegistrationBtn} >Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserRegistration

