import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
  

<div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <a class="footer-logo-link" href="#">
              <span class="hidden-link-text">LOGO</span>
              <img src={require("../../img/laundry.jpg")} style={{width:"100px", height:"60px"}}  alt="img" srcset="" />
            </a>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Get Started</h2>
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Start</a>
              </li>
     
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> nav</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Home</a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">About Us</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Legal</h2>
            <ul id="menu-legal" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="#">Privacy Notice</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">laundry in piro</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">laundry in ara</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">laundry in jagdishpur</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">laundry in bihiya</a>
              </li>
              <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                <a href="#">laundry in sonbarsha</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">laundry in garahani</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
            <p class="footer-call-to-action-description"> Experience the difference with our dry clean laundry services in Ara, Piro, Jagdishpur, Behea, and Sonbarsha. Contact us today to schedule your service!</p>
            <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
          </div>
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> You Call Us</h2>
            <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:94314 44535" target="_self"> 7070110600 </a></p>
          </div>
        </div>
        <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
            <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
          </svg>
         
          <a class="footer-social-link twitter" href="#" target="_blank">
            <span class="hidden-link-text">Twitter</span>
            <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
              <path class="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
            </svg>
          </a>
          <a class="footer-social-link youtube" href="#" target="_blank">
            <span class="hidden-link-text">Youtube</span>
            <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path class="footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
            </svg>
          </a>
          
        </div>
      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self"> ©2024. | Designed By: veera software solution. | All rights reserved. </a>
          </p>
        </div>
      </div>
    </footer>
  </div>


  )
}

export default Footer
