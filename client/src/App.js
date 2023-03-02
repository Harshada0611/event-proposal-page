import React from 'react'
import './App.css'
//import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import CreateProposal from './components/createProposal/CreateProposal';
// //navbar
// import Navbar from './components/navbar/Navbar';
// import PublicRoute from './routes/PublicRoute'
// import UserPrivateRoute from './routes/UserPrivateRoute'
// import VendorPrivateRoute from './routes/VendorPrivateRoute';

// //public route
// //vendor routes
// import VendorSignin from './components/vendor/vendor-signin/VendorSignin';
// import VendorRegistration from './components/vendor/vendor-registration/VendorRegistration'
// //user routes
// import UserSignin from './components/user/user-signin/UserSignin';
// import UserRegistration from './components/user/user-registartion/UserRegistration';
// import Home from './components/Home/Home';
// //public route ends

//user private routes



function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* <div className='NavbarWrapper'>
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
          <Route path='/user' element={<Home/>}></Route>
        </Route>


        <Route element={<VendorPrivateRoute />}>
          {/* <Route path='/vendor' element={<Vendor />}></Route> 
        </></Route>
      </Routes> */}
      <CreateProposal/>
    </>
  );
}

export default App;


