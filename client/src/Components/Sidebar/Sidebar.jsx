import React from 'react'
import './Sidebar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../login_registeration/Popup';
import SignIn from '../login_registeration/SignIn';
import SignUp from '../login_registeration/SignUp';


const Sidebar = ()=>{

    const [togglebar,setTogglebar] = useState("sidebar close");
    const [login,setLogin] = useState(true);

    const [ltrigger,setltrigger] = useState(true);
    const [rtrigger,setrtrigger] = useState(false);


    return(
        <>
            <nav className={togglebar}>
<header>
  <div className="image-text">
    <span className="image">
    </span>
    <div className="text logo-text">
    <Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link>
      
    </div>
  </div>
  <i className="bx bx-chevron-right toggle" onClick={(event)=>{
      event.preventDefault();

      if(togglebar === "sidebar close"){
        setTogglebar("sidebar")
      }
      else{
        setTogglebar("sidebar close")
      }
      
  }} />
</header>
<div className="menu-bar">
  <div className="menu">
    <li className="search-box" onClick={(event)=>{
        event.preventDefault();
        setTogglebar("sidebar");
    }}>
      <i className="bx bx-search icon" />
      <input type="text" placeholder="Search..." />
    </li>
    <ul className="menu-links">
      <li className="nav-links">
      <Link to = "/dashboard">
      <a href="#">
          <i className="bx bx-home-alt icon" />
          <span className="text nav-text">Dashboard</span>
        </a>
      </Link>
        
      </li>
      <li className="nav-links">
      <Link to = "/profile">
      <a href="#">
          <i className="bx bx-user icon" />
          <span className="text nav-text">Profile</span>
        </a>
      </Link>
        
      </li>
      <li className="nav-links">
        <a href="#">
          <i className="bx bx-bell icon" />
          <span className="text nav-text">Notifications</span>
        </a>
      </li>
      <li className="nav-links">
        <a href="#">
          <i className="bx bx-heart icon" />
          <span className="text nav-text">Likes</span>
        </a>
      </li>
      <li className="nav-links">
        <a href="#">
          <i className="bx bx-wallet icon" />
          <span className="text nav-text">Fines</span>
        </a>
      </li>
    </ul>
  </div>
  {
    login ? 
    <div className="bottom-content">
    <li className>
      <a href="#">
        <i className="bx bx-log-out icon" />
        <span className="text nav-text">Logout</span>
      </a>
    </li>
  </div>
  :
  <div className="bottom-content">
    <li className>
      <a href="#">
        <i className="bx bx-log-in icon" />
        <span className="text nav-text">Login</span>
      </a>
    </li>
  </div>
  }
  
</div>
<Popup trigger = {ltrigger} text = "Sign In" setTrigger = {setltrigger}>
              <SignIn  setlogin = {setltrigger} setregister = {setrtrigger}></SignIn>
          </Popup>

          <Popup trigger = {rtrigger} text = "Sign Up" setTrigger = {setrtrigger}>
              <SignUp  setlogin = {setltrigger} setregister = {setrtrigger}></SignUp>
          </Popup>
</nav>

        </>
    )
}

export default Sidebar;