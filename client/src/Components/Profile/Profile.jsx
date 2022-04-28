import React, { useEffect, useState } from 'react'
import Footer from '../Sidebar/Footer';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Reservations from './Reservations';


const Profile = ()=>{

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [reserves,setReserves] = useState([]);
  const [borrows,setBorrows]  = useState([]);
 const [details,setDetails] = useState([]);


  useEffect(()=>{

    const userId = localStorage.getItem("UserId");


      Axios.get(`http://localhost:7000/User/get/${userId}`).then((result)=>{
        setName(result.data.name);
        setEmail(result.data.email);
        setReserves(result.data.reservations);
        setBorrows(result.data.borrowings);
      }).catch((err)=>{
        console.log(err);
      })

     Axios.get(`http://localhost:7000/Reserve/get/${userId}`).then((result)=>{
      setDetails(result.data);
     })

      

  },[])

    return(
        <>

<section className="home" style = {{background:"#212121"}}>
             <div className="text"><Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link></div>
        <div className="py">
        
        </div>

        <div style = {{background:"#212121"}}>
             <div className="container" style = {{background:"#212121"}}>
        <div className="row">
          <div className="col-md-4 mt-1" >
            <div className="card text-center sidebar" style={{background:"#212121", border:"2px solid #6d9875",height:"37vh"}}>
              <div className="card-body" style={{background:"#212121"}}>
                {/* <img src="C:\Users\shree\Downloads\profile image.png" className="rounded-circle" width={150} /> */}
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded-circle" width={150} />

                <div className="mt-3">
                  <h3 style={{color:"#d9cab3"}}>{name}</h3>
                  <br />
                  <br />
                  <br />
                  <br />
              {/* <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Name</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    XYZ
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    abc@gmail.com
                  </div>
                </div>

           
              </div> */}
        
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content" style={{background:"#212121", border:"2px solid #6d9875"}}>
              <h2 className="m-3 pt-3" style={{color:"#d9cab3"}}>Profile</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5 style={{color:"#d9cab3"}}>Name</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                   {name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5 style={{color:"#d9cab3"}}>Email</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {email}
                  </div>
                </div>

           
              </div>
            </div>
            <h2 className="m-3" style={{color:"#6d9875",background:"#212121"}}>Book Reservations</h2>
           
           {
             details.map((val)=>{
               return(
                 <>
                   <Reservations title = {val.title} id = {val._id} author = {val.author}  date = {val.date}></Reservations>
                 </>
               )
             })
           }
              
            <br />
            
            <br />
            <h2 className="m-3" style={{color:"#6d9875",background:"#212121"}}>Books Borrowed</h2>
           
              
            {
             borrows.map((val)=>{
               return(
                 <>
                   <Reservations></Reservations>
                 </>
               )
             })
           }
              


          </div> 
        </div>
      </div>
        </div>
        
            <Footer></Footer>
             </section>
           
        </>
    )
}

export default Profile;