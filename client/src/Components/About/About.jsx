import React from 'react'
import Footer from '../Sidebar/Footer';
import { Link } from 'react-router-dom';

const About = ()=>{
    return(
        <>
            <section className="home" style = {{background:"#212121"}}>
             <div className="text"><Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link></div>
        <div className="py" style={{background:"#212121"}}>
        
        </div>

        <div className="container my-5" style={{background:"#212121"}}>
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="https://st2.depositphotos.com/1561359/7025/i/450/depositphotos_70250531-stock-photo-about-us-words-written-by.jpg"  className="img-fluid" style={{boxShadow: '0 0 15px #d9cab3',maxHeight: "70%"}} alt="" />
          </div>
          <div className="col-md-6 pt-3" style={{background:"#212121"}}>
            {/* <h1 className="h2 mb-4" style={{fontWeight: 600}}>About Us</h1> */}
            <p  style={{lineHeight: 2,textAlign:'justify',fontSize:"1rem",color:"#f1f1f1"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat iure laboriosam cum voluptatum, nam minima deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit, odit quod!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, eius delectus optio nam itaque libero earum iste at, saepe laudantium id similique consectetur nisi porro ex voluptate. Fugiat dolorem deleniti velit nesciunt enim optio a, fuga eligendi minima, illum, sint ab esse. Quis neque eligendi illo odit rerum a reiciendis?
            </p>
          </div>
        </div>
      </div>
        
        
            <Footer></Footer>
             </section>
        </>
    )
}

export default About;