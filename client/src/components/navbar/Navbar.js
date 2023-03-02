import React from 'react'
import './navbar.css'
import LogoutBtn from '../LogoutWrapper/LogoutBtn'


function Navbar() {
    const auth = (localStorage.getItem('vendorName')) || (localStorage.getItem('userName'))
    //console.log(auth)

    //show navbar box shadow after sucessful login
    const navbarStyle = { boxShadow: (!auth) ? 'none' : '1px 2px 10px 1px lightgrey' }
    
    //LOGO styling
    const logoStyle = { color: (!auth) ? 'white' : '#64A1F5' }

    //profile and logout on navbar accessible only after login
    const name_logout = { visibility: (!auth) ? 'hidden' : 'visible', color: '#4E94F4' }

    return (
        <div className='Navbar' style={navbarStyle}>
            <h1 style={logoStyle}>LOGO</h1>
            <div style={name_logout}><LogoutBtn /></div>
        </div>
    )
}

export default Navbar