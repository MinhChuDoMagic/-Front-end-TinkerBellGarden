import React, { Component } from "react"; 

export default class SignUp extends Component {
    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Full name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>

                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="Phone number" className="form-control" placeholder="Enter your phone number" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Confirm password</label>
                            <input type="password" className="form-control" placeholder="Confirm password" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">log in?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}