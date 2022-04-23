import React, { useState } from "react";
import './Grid.css'
import Card from "./Card";
import Axios from "axios";

const Grid = (props)=>{
  
  const [books,setBooks] = useState([]);


  Axios.get(`http://localhost:7000/Book/getype/${props.type}`).then((result)=>{
    setBooks(result.data);
  }).catch((err)=>{
    console.log(err);
  })
  
  return(
    
        <>
             <div>
        <div className="main">
          <ul className="cards">
            {
              books.map((val)=>{
                return(
                  <>
                    <Card title = {val.title} img = {val.img} description = {val.description} author = {val.author}
                    edition = {val.edition} link = {val.link} avail = {val.avail}
                    ></Card>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
        </>
    )
}

export default Grid;