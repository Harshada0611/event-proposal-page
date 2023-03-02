import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

//navbar
import Navbar from './component/navbar/Navbar';
import PublicRoute from './routes/PublicRoute'
import UserPrivateRoute from './routes/UserPrivateRoute'
import VendorPrivateRoute from './routes/VendorPrivateRoute';

//public route
//vendor routes
import VendorSignin from './component/vendor/vendor-signin/VendorSignin';
import VendorRegistration from './component/vendor/vendor-registration/VendorRegistration'
//user routes
import UserSignin from './component/user/user-signin/UserSignin';
import UserRegistration from './component/user/user-registartion/UserRegistration';
//public route ends

//user private routes


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='NavbarWrapper'>
        <Navbar />
      </div>
      
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<VendorSignin />}></Route>.
          <Route path='/vendor-registration' element={<VendorRegistration />}></Route>
          <Route path='/user-signin' element={<UserSignin />}></Route>
          <Route path='/user-registration' element={<UserRegistration />}></Route>
        </Route>


        <Route element={<UserPrivateRoute />}>
          {/* <Route path='/user' element={<User />}></Route> */}
        </Route>


        <Route element={<VendorPrivateRoute />}>
          {/* <Route path='/vendor' element={<Vendor />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
