import React from 'react'
import './Popup.css'
// import CloseIcon from "@material-ui/icons/Close";


const Popup = (props)=>{



    return(props.trigger) ? (

            <div className="popup">
                <div className="popup-inner">
                    <div style = {{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className = "title" style={{color:"#f1f1f1"}} ><h3><b>{props.text}</b></h3></div>
                    </div>
                   
                    <button className="close-btn" onClick = {(event)=>{
                     props.setTrigger(false);
                    }}>
                    {/* <CloseIcon fontSize = "large"/> */}
                    X</button>
                    {props.children}
                </div>
            </div>
        
    ) : "";
}

export default Popup;

