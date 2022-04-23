import React from "react";

const Card = (props)=>{
    return(
        <>
             <li className="cards_item">
              <div className="card" style={{background:"#212121"}}>
                <div className="card_image"><img src={props.img} style ={{width:"fit-content"}}/></div>
                <div className="card_content">
                  <h2 className="card_title">{props.title} ({props.edition})</h2>
                  <br />
                  <p className="card_text">{props.description}</p>
                  <div className="card_text" style={{float:"right", color:"#d9cab3"}}>By: {props.author}</div>
                  <br />
                  <br />
                  <button className="btn card_btn"><a href = {props.link} style ={{textDecoration:"none",color:"#f1f1f1"}} target = "_blank">Preview</a></button>
                  {
                    props.avail > 0 ? 
                    <>
                    <br />
                      <h6 style={{color:"#f1f1f1"}}>Availablity : {props.avail}</h6>
                    </>
                    :
                    <><button className="btn card_btn">Reserve</button></>
                  }
                  
                </div>
              </div>
            </li>
        </>
    )
}

export default Card;