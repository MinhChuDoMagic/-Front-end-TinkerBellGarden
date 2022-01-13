import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/customer/login/login.component";
import SignUp from "./components/customer/signup/signup.component";
import VIPRegister from "./components/customer/Vip-register/vipregister.component";
import Event from "./components/customer/event/event.component";
import stallTicket from './components/employee/staff/stallTicket';
import reception from './components/employee/receptionist/reception';
import ticketBooking from './components/customer/ticketBooking/ticketBooking';

function App() {
  return (<Router>
    <div className="App">
          <Switch>
              <Route exact path='/' component={Login} /> {/*Ô nào làm trang chủ thì thay component trang chủ vào đây */}
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/VIP-register" component={VIPRegister} /> 
              <Route path="/event1" component={Event} /> 
              <Route path="/stallTicket" component={stallTicket} />
              <Route path="/reception" component={reception}/>
              <Route path="/ticketBooking" component={ticketBooking}/>
          </Switch>
    </div></Router>
  );
}

export default App;
