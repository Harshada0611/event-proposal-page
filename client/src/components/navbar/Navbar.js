import React, { useEffect } from 'react'
import './navbar.css'
import LogoutBtn from '../LogoutWrapper/LogoutBtn'

function Navbar({auth, setAuth}) {
    //console.log(auth)
    useEffect(()=>{
        const name = (localStorage.getItem('vendorName')) || (localStorage.getItem('userName'))
        setAuth(name);
        // eslint-disable-next-line 
    },[])
    
    //LOGO styling
    const logoStyle = { color: (!auth) ? 'white' : '#64A1F5' }

    //profile and logout on navbar accessible only after login
    const backgroundColor = (!auth)?'transparent':'white'

    return (
        <div className='Navbar' style={{backgroundColor}}>
            <h1 style={logoStyle}>LOGO</h1>
            {auth && <div ><LogoutBtn setAuth={setAuth} /></div>}
        </div>
    )
}

export default Navbar