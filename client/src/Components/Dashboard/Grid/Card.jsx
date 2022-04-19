import React from "react";

const Card = ()=>{
    return(
        <>
             <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                <div className="card_content">
                  <h2 className="card_title">Card Grid Layout</h2>
                  <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
        </>
    )
}

export default Card;