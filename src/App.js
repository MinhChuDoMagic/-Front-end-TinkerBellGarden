import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from "react-router-dom";

import User from './webpage/User'
import Manager from './webpage/Manager'
// import Staff from './webpage/Staff'
// import Receptionist from './webpage/Receptionist'
import SignUp from './components/customer/signup/signup.component';
import Login from './components/customer/login/login.component';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route index element={<User/>} />
          <Route exact path="user/*" element={<User/>}>
            {/* <Route exact path="" element={<Home/>}></Route>
            <Route exact path="home" element={<Home/>}></Route>
            <Route exact path="profile" element={<Profile/>}></Route> */}
          </Route>
          <Route exact path='manager/*' element={<Manager/>} />
         

          <Route path="/login" exact element={<Login/>} />
          <Route  path="/signup" exact element={<SignUp/>} />
        </Routes>
    </div>
  );
}

export default App;
