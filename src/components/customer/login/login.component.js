import React,{useState} from "react";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [nbphone, setNbphone] = useState("")
    const [password, setPassword] = useState("")

    let navi=useNavigate();

    const hanleSignin=()=>{
        if(nbphone==="user"&&password=="1"){
            localStorage.setItem("isLogin","true");
            navi("/home");
        }
    }

    return (
        <div className="outer">
            <div className="inner">
            <form>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Phone number</label>
                    <input
                        type="phone number" 
                        className="form-control" 
                        placeholder="Phone number" 
                        onChange={e=>setNbphone(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Vai trò</Form.Label>
                    <Form.Control as="select">
                        <option>Khách hàng</option>
                        <option>Người quản lý</option>
                        <option>Nhân viên lễ tân</option>
                        <option>Nhân viên quầy</option>
                    </Form.Control>
                </Form.Group>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-dark btn-lg btn-block"
                    onClick={()=>hanleSignin()}
                >
                    Sign in
                </button>
                <p className="forgot-password text-right">
                    Forgot <a href="##">password?</a>
                </p>
            </form>
            </div>
        </div>
    )
}
