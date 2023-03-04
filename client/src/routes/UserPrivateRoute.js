import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function UserPrivateRoute() {
    const auth = localStorage.getItem('userName');
    const token = localStorage.getItem('token');
    return (
      auth ? (<Outlet />) : token ? (<Navigate to='/vendor'/>)
      :(<Navigate to='/'/>)

  )
}

export default UserPrivateRoute