import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
//import ErrorPage from './ErrorPage'

function PublicRoute() {
  const token = localStorage.getItem('token');
  const vendor = localStorage.getItem('vendorName');
  return (
    <>
      {
        !token ? <Outlet/> :
        vendor? <Navigate to={'/vendor'}/> : <Navigate to={'/user'}/>

      }
    </>
  )
}

export default PublicRoute