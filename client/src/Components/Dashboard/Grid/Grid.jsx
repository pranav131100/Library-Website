import React from "react";
import './Grid.css'
import Card from "./Card";

const Grid = ()=>{
    return(
        <>
             <div>
        <div className="main">
          <ul className="cards">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </ul>
        </div>
      </div>
        </>
    )
}

export default Grid;