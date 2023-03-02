import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function VendorPrivateRoute() {
  const auth = localStorage.getItem('vendorName')
  return (
    auth ? (<Outlet />) : (<Navigate to='/user'/>)

  )
}

export default VendorPrivateRoute