import React,{useState,useEffect} from 'react';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import './cusheader.css';

export default function CustomerHeader() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
      let lg=localStorage.getItem("isLogin");
      if(lg!==null) setLogin(true);
      else setLogin(false);
  },[localStorage.getItem("isLogin")])

  let navi=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("isLogin");
    navi("/user/home");
  }

    return (
      <div className='header1'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/user/home">Tinkerbell Garden</Link>
          {/* <a className="navbar-brand logo" href="/user/home">Tinkerbell Garden</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse addspace" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/user/home">Trang chủ</NavLink>
                {/* <a className="nav-link active" aria-current="page" href="/user/home">Trang chu</a> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/user/event">Sự kiện</NavLink>
                {/* <a className="nav-link active" aria-current="page" href={login?"user/event":"/login"}>Sự kiện</a> */}
              </li><li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={login?"/user/tickbooking":"/login"}>Đặt vé</NavLink>
                {/* <a className="nav-link active" aria-current="page" href={login?"/user/tickbooking":"/login"}>Đặt vé</a> */}
              </li>
             
            </ul>
            <form className="d-flex">
              {
                login
                ?
                <div className='drop'>
                  <button className="nut_dropdown">alo</button>
                  <div className='noidung_dropdown'>
                    <div onClick={()=>navi("/user/profile")}>Profile</div>
                    <div onClick={()=>navi("/user/VIPRegister")}>Đăng ký VIP</div>
                    <div onClick={()=>handleLogout()}>Đăng xuất</div>
                  </div>
                </div>
                :
                <div>
                  <button className='home_login' onClick={()=>navi("/login")}>Đăng nhập</button>
                  <button className='home_signup' onClick={()=>navi("/signup")}>Đăng ký</button>
                </div>
              }
            </form>
           </div>
         </div>
       </nav>
       </div>
    )
} 