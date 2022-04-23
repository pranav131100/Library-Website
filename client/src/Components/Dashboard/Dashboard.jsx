import React from "react";
import Footer from "../Sidebar/Footer";
import './Dashboard.css'
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import Home from "../Home/Home"
import Grid from "./Grid/Grid";

const Dashboard = ()=>{
    return(
        <>
             <section className="home" >
             <div className="text"><Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link></div>
        <div className="py">
            
        </div>
        <div style={{background:"#212121"}}>
        <div className="small-container">
        <div >
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{margin:"2rem"}}>
          <li className="nav-item" id = "nav1" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
          </li>
          <li className="nav-item" id = "nav2" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" >Biography</button>
          </li>
          <li className="nav-item" id = "nav3" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" >Horror</button>
          </li>
          <li className="nav-item" id = "nav4" role="presentation">
            <button className="nav-link" id="pills-scifi-tab" data-bs-toggle="pill" data-bs-target="#pills-scifi" type="button" role="tab" aria-controls="pills-scifi" aria-selected="false" >Sci-Fi</button>
          </li>
          <li className="nav-item" id = "nav5" role="presentation">
            <button className="nav-link" id="pills-food-tab" data-bs-toggle="pill" data-bs-target="#pills-food" type="button" role="tab" aria-controls="pills-food" aria-selected="false" >Food and Nutrition</button>
          </li>
          <li className="nav-item" id = "nav6" role="presentation">
            <button className="nav-link" id="pills-history-tab" data-bs-toggle="pill" data-bs-target="#pills-history" type="button" role="tab" aria-controls="pills-history" aria-selected="false" >History</button>
          </li>
          
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
           
        <Grid type = "all"></Grid>
            
          </div>

          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <Grid type = "Biography"></Grid>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <Grid type = "Horror"></Grid>
          </div>
          <div className="tab-pane fade" id="pills-scifi" role="tabpanel" aria-labelledby="pills-scifi-tab">
          <Grid type = "Science Fiction"></Grid>
          </div>
          <div className="tab-pane fade" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab">
          <Grid type = "Food & Nutrition"></Grid>
          </div>
          <div className="tab-pane fade" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab">
          <Grid type = "History"></Grid>
          </div>
        </div>
      </div>
          

      </div>
      </div>
        
            <Footer></Footer>
             </section>
        </>
    )
}

export default Dashboard;