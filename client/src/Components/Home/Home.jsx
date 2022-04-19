import React from "react";
import '../Sidebar/Sidebar.css'
import {Carousel} from 'react-bootstrap'
import Footer from "../Sidebar/Footer";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
        
             <section className="home">
        <div className="text"><Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link></div>
        <div className="py">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__340.jpg"
      alt="First slide"
      style={{height:"65vh"}}
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/10/10/13/03/prague-980732__340.jpg"
      alt="Second slide"
      style={{height:"65vh"}}
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327__340.jpg"
      alt="Third slide"
      style={{height:"65vh"}}
    />

    
  </Carousel.Item>
</Carousel>
<br />
<br />
          <div className="container">
            <div className="row hidden-md-up">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-block">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-heart m-b-1" />
                      <h2 className="statistic-counter">100</h2>
                      <p>Love Our Team</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-block">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-check m-b-1" />
                      <h2 className="statistic-counter">400</h2>
                      <p>Users</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-block">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-refresh m-b-1" />
                      <h2 className="statistic-counter">53</h2>
                      <p>Premium Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-block">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-beer m-b-1" />
                      <h2 className="statistic-counter">1000</h2>
                      <p>Books</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-block">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-beer m-b-1" />
                      <h2 className="statistic-counter">480</h2>
                      <p>Articles</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-block">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-beer m-b-1" />
                      <h2 className="statistic-counter">48</h2>
                      <p>Magazines</p>
                    </div>
                  </div>
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

export default Home;