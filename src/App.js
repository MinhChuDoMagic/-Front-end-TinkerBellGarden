import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/customer/login/login.component";
import SignUp from "./components/customer/signup/signup.component";
import VIPRegister from "./components/customer/Vip-register/vipregister.component";
import Event from "./components/customer/event/event.component";
import addEvent from './components/staff/addEvent.component';
import Home from './components/customer/home/Home';
import Profile from './components/customer/profile/Profile';
import stallTicket from './components/employee/nvquay/stallTicket';
import reception from './components/employee/receptionist/reception';
import ticketBooking from './components/customer/ticketBooking/ticketBooking';

function App() {
  return (<Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to={"/"}>positronX.io</Link> */}
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
        {/* <ul className="navbar-nav mr-auto my-2 my-lg-0" >
          <li className="nav-item active">
            <a className="nav-link" href="/">Đăng nhập <span className="sr-only">(current)</span></a>
          </li>
        </ul> */}
        <form className="form-inline my-2 my-lg-0">
          <a class="btn btn-outline-success" href="/login" role="button">Đăng nhập</a>
          <p>     </p>
          <a class="btn btn-outline-success" href="/sign-up" role="button">Đăng kí</a>
          {/* <button className="btn btn-outline-success my-2 my-sm-0 " type="submit" href="/login" >Đăng nhập</button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng kí</button> */}
        </form>
      </div>
    </nav>
          <Switch>
              <Route exact path='/' component={Home} /> {/*Ô nào làm trang chủ thì thay component trang chủ vào đây */}
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/VIP-register" component={VIPRegister} /> 
              <Route path="/event1" component={Event} /> 
              <Route path="/addEvent" component={addEvent} /> 
              <Route path="/profile" component={Profile} /> 
              <Route path="/stallTicket" component={stallTicket} />
              <Route path="/reception" component={reception}/>
              <Route path="/ticketBooking" component={ticketBooking}/>
          </Switch>
    </div></Router>
  );
}

export default App;
