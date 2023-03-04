import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function VendorPrivateRoute() {
  const auth = localStorage.getItem('vendorName');
  const token = localStorage.getItem('token');
  return (
    auth ? (<Outlet />) : token ? (<Navigate to='/user'/>)
    :(<Navigate to='/'/>)
  )
}

export default VendorPrivateRoute