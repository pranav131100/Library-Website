import React from "react";
import BrowserRouter from 'react-router-dom'
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = ()=>{
    return(
        <>
        <Sidebar></Sidebar>
        <Home></Home>
        </>
    )
}

export default App;