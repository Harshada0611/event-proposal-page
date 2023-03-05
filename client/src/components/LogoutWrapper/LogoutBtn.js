import React from 'react';
import './logoutWrapper.css';
import { useNavigate } from 'react-router-dom';
import profileIcon from './profileIcon.png';
import logout from './logout.png';
import toast from 'react-hot-toast';

function LogoutBtn({setAuth}) {

    const navigate = useNavigate()

    //handle logout function
    const handleLogout = () => {
        localStorage.removeItem('vendorName') || localStorage.removeItem('userName') || localStorage.removeItem('token')
        setAuth("");
        toast.success('You logged out successfully!!')
        navigate('/')
    }

    const auth = (localStorage.getItem('vendorName')) || (localStorage.getItem('userName'))
    const profileName = auth ? (auth.toUpperCase()) : auth
    //console.log(auth)


    return (
        <div className='logout-profile-wrapper' >
            <div className='profile-wrapper'>
                <h2 className='nameTitle'>{profileName}</h2>
                <img src={profileIcon} alt='profileIcon' className='profileIcon' />
            </div>
            <img src={logout} alt='logoutIcom' onClick={handleLogout} className='logoutBtn' />
        </div>
    )
}

export default LogoutBtn