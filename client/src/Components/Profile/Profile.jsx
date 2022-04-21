import React, { useEffect, useState } from 'react'
import Footer from '../Sidebar/Footer';
import { Link } from 'react-router-dom';
import Axios from 'axios'


const Profile = ()=>{

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");


  useEffect(()=>{

    const userId = localStorage.getItem("UserId");


      Axios.get(`http://localhost:7000/User/get/${userId}`).then((result)=>{
        setName(result.data.name);
        setEmail(result.data.email);
      }).catch((err)=>{
        console.log(err);
      })

  },[])

    return(
        <>

<section className="home">
             <div className="text"><Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link></div>
        <div className="py">
        
        </div>

        <div>
             <div className="container">
        <div className="row">
          <div className="col-md-4 mt-1" >
            <div className="card text-center sidebar" style={{background:"#212121",border:"none"}}>
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
            <div className="card mb-3 content" style={{background:"#212121", border:"none"}}>
              <h2 className="m-3 pt-3">Profile</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Name</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                   {name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {email}
                  </div>
                </div>

           
              </div>
            </div>
            <h2 className="m-3" style={{color:"#d9cab3"}}>Book Borrowings </h2>
           
              
            


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