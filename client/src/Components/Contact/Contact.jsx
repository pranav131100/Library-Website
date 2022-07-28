import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Sidebar/Footer';
import './Contact.css'

const Contact = ()=>{
    return(
        <>
            <section className="home" style = {{background:"#212121"}}>
             <div className="text"><Link to = "/" style = {{textDecoration:"none",color:"#f6f6f6"}}><span className="name">Digital Library</span></Link></div>
        <div className="py" style={{background:"#212121"}}>
        
        </div>

        <div>
        <form className="my-form">
          <div className="container">
            <h1>Get in touch!</h1>
            <ul>
              <li>
                <select>
                  <option selected disabled>-- Please choose an option --</option>
                  <option>Request Quote</option>
                  <option>Send Resume</option>
                  <option>Other</option>      
                </select>
              </li>
              <li>
                <div className="grid grid-2">
                  <input type="text" placeholder="Name" required />  
                  <input type="text" placeholder="Surname" required />
                </div>
              </li>
              <li>
                <div className="grid grid-2">
                  <input type="email" placeholder="Email" required />  
                  <input type="tel" placeholder="Phone" />
                </div>
              </li>    
              <li>
                <textarea placeholder="Message" defaultValue={""} />
              </li>   
              <li>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I have read and agreed with <a href>the terms and conditions.</a></label>
              </li>  
              <li>
                <div className="grid grid-3">
                  <div className="required-msg">REQUIRED FIELDS</div>
                  <button className="btn-grid" type="submit" disabled>
                    <span className="back">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                    </span>
                    <span className="front">SUBMIT</span>
                  </button>
                  <button className="btn-grid" type="reset" disabled>
                    <span className="back">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                    </span>
                    <span className="front">RESET</span>
                  </button> 
                </div>
              </li>    
            </ul>
          </div>
        </form>
        <footer>
          <div className="container">
            <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
            </small>
          </div>
        </footer>
      </div>
        
        
            <Footer></Footer>
             </section>
        </>
    )
}

export default Contact;