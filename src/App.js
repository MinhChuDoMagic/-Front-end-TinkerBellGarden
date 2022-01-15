import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/customer/login/login.component";
import SignUp from "./components/customer/signup/signup.component";
import VIPRegister from "./components/customer/Vip-register/vipregister.component";
import Event from "./components/customer/event/event.component";
import addEvent from './components/staff/addEvent/addEvent.component';
import Home from './components/customer/home/Home';
import Profile from './components/customer/profile/Profile';
import stallTicket from './components/employee/nvquay/stallTicket';
import reception from './components/employee/receptionist/reception';
import ticketBooking from './components/customer/ticketBooking/ticketBooking';
import userHome from './components/customer/userHome/Home';
import eventList from './components/customer/eventList/eventList';
import adminSidebar from './components/staff/adminSidebar/adminSidebar';

function App() {
  return (<Router>
    <div className="App">
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <a className="navbar-brand" href="/">Tinker Bell Garden</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Event1">Sự kiện <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">Đặt vé <span className="sr-only">(current)</span></a>
          </li>
          
          
        </ul>
        
        <form className="form-inline my-2 my-lg-0">
          <a class="btn btn-outline-success" href="/login" role="button">Đăng nhập</a>
          <p>     </p>
          <a class="btn btn-outline-success" href="/sign-up" role="button">Đăng kí</a>
          
        </form>
      </div>
    </nav> */}
          <Route>
            <Route exact path='/' component={Home} /> {/*Ô nào làm trang chủ thì thay component trang chủ vào đây */}
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profile" component={Profile} />
          </Route>


          <Route>
            <Route path="/userHome" component={userHome} />
            <Route path="/VIP-register" component={VIPRegister} /> 
            <Route path="/event1" component={Event} /> 
            <Route path="/eventList" component={eventList} /> 
            <Route path="/ticketBooking" component={ticketBooking}/>
          </Route>

          <Route>
            <Route path="/admin/addEvent" component={addEvent} />               
            <Route path="/admin/stallTicket" component={stallTicket} />
            <Route path="/admin/reception" component={reception}/>
            <Route path="/admin/slidbar" component={adminSidebar}/>
          </Route>

    </div></Router>
  );
}

export default App;
