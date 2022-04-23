import React, { useEffect } from "react";

const Reservations = (props)=>{

    

    return(
        <>
            <div className="card mb-3 content" style = {{background:"#212121",border:"2px solid #6d9886"}}>
              
              
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5 style={{color:"#d9cab3"}}> Book id </h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {props.id}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-9">
                    <h5 style={{color:"#d9cab3"}}>Title</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {props.date}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">
                    <h5 style={{color:"#d9cab3"}}>Author</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                   {props.time}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">
                    <h5 style={{color:"#d9cab3"}}>Reservation Time</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {props.guests}
                  </div>
                  <hr />
                  <br />
        
                  <div>
                  <button className="btn btn-danger">Cancel</button>
                  </div>
                </div>
              </div>
            </div>

        </>
    )
}

export default Reservations;

