import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
//import ErrorPage from './ErrorPage'

function PublicRoute() {
  const auth = localStorage.getItem('vendorToken') || localStorage.getItem('vendorName') || localStorage.getItem('userName')
  return (
    (!auth)?<Outlet/>:<Navigate to='/'/>
  )
}

export default PublicRoute