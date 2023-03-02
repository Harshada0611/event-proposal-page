import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
//navbar
import Navbar from './components/navbar/Navbar';
import PublicRoute from './routes/PublicRoute'
import UserPrivateRoute from './routes/UserPrivateRoute'
import VendorPrivateRoute from './routes/VendorPrivateRoute';

//public route
//vendor routes
import VendorSignin from './components/vendor/vendor-signin/VendorSignin';
import VendorRegistration from './components/vendor/vendor-registration/VendorRegistration'
//user routes
import UserSignin from './components/user/user-signin/UserSignin';
import UserRegistration from './components/user/user-registartion/UserRegistration';
import Home from './components/Home/Home';
import CardDetails from './components/CardDetails/CardDetails';
import CreateProposal from './components/createProposal/CreateProposal';
import AllProposalList from './components/All-proposal-List/AllProposalList';
//public route ends

//user private routes
function App() {
  const [auth, setAuth] = useState("");
  const [details, setDetails] = useState(null);
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='NavbarWrapper'>
        <Navbar auth={auth} setAuth={setAuth}/>
      </div>
      
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<VendorSignin setAuth={setAuth} />}></Route>.
          <Route path='/vendor-registration' element={<VendorRegistration />}></Route>
          <Route path='/user-signin' element={<UserSignin setAuth={setAuth} />}></Route>
          <Route path='/user-registration' element={<UserRegistration />}></Route>
        </Route>


        <Route element={<UserPrivateRoute />}>
          <Route path='/user' element={<Home selected={selected} setSelected={setSelected} setDetails={setDetails}/>}></Route>
          <Route path='/proposal-details' element={<CardDetails proposal={details} selected={selected} setSelected={setSelected}/>}></Route>
        </Route>

        <Route element={<VendorPrivateRoute />}>
          <Route path='/newProposal' element={<CreateProposal/>}></Route> 
          <Route path='/vendor' element={<AllProposalList/>}></Route> 
        </Route>
        
      </Routes>
    </>
  );
}

export default App;


