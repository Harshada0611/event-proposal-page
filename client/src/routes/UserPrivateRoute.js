import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function UserPrivateRoute() {
    const auth = localStorage.getItem('userName')
    return (
      auth ? (<Outlet />) : (<Navigate to='/vendor'/>)

  )
}

export default UserPrivateRoute