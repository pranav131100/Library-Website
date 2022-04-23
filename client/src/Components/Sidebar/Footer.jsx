import React from "react";

const Footer = ()=>{
    return(
        <>
            <div>
        <footer id="site-footer">
         
          <section className="horizontal-footer-section" id="footer-middle-section">
            <div id="footer-about" className="footer-columns footer-columns-large">
              <h1>Our Address</h1>
              <address>
                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png" />30/20, Verkhy street, Moscow, Russia</p>
                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png" />7 (800) 555–35–35</p>
                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png" />noreply@reply.io</p>
                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/clock.png" />8:00 AM – 8:00 PM</p>
              </address>
              {/* <h1> Our Newsletter</h1>
              <a href="#" className="footer-button" role="button">Subscribe</a> */}
            </div>
            <div className="footer-columns">
              <h1>Overview</h1>
              <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Services </a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Pricing</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Portfolio</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">News</a>
                </li>
              </ul>
            </div>
            <div className="footer-columns">
              <h1>Resources</h1>
              <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">FAQ</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Media</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Guides</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Free Resources</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="footer-columns">
              <h1>Information</h1>
              <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">About Us</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Terms of Use</a>
                </li>
                <li className="footer-column-menu-item">
                  <a href="#" className="footer-column-menu-item-link" role="menuitem">Legal Information</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Message Us</a>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                  <a href="#" className="footer-column-menu-item-link">Leave a Feedback</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="horizontal-footer-section" id="footer-bottom-section">
            <div id="footer-copyright-info">
              © Digital Library 2022. All rights reserved.
            </div>
            <div id="footer-social-buttons">
              <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />
              <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" />
              <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" />
              <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
            </div>
          </section>
        </footer>
        
      </div>
        </>
    )
}

export default Footer;