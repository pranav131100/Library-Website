import React from "react";
import BrowserRouter, { Routes } from 'react-router-dom'
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Sidebar/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard"
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";


const App = ()=>{
    return(
        <>
        <Sidebar></Sidebar>
        <Routes>
        <Route exact path = "/" element= {<Home></Home>} ></Route>
        <Route exact path  = "/dashboard" element = {<Dashboard></Dashboard>} ></Route>
        <Route exact path = "/profile" element = {<Profile></Profile>}></Route>
        <Route exact path="/about" element = {<About></About>}></Route>
        <Route exact path = "/contact" element = {<Contact></Contact>}></Route>
        </Routes>
        
        
        </>
    )
}

export default App;