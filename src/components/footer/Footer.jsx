import React from 'react'
import './Footer.style.css'

const Footer = () => {
  return (
    <div>
        <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">
                <img src="assets/logo.png" alt="Powerfull Logo" />
            </div>
            <p class="footer-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quae, voluptate,
                voluptas quia quibusdam voluptatibus quos doloribus quidem voluptatum, quod, quae, voluptate, voluptas
                quos doloribus fugiat.
            </p>
            <div class="footer-links-container">
                <div class="footer-column">
                    <h3>Information</h3>
                    <ul class="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Classes</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Helpful Links</h3>
                    <ul class="footer-links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Supports</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
      
    </div>
  )
}

export default Footer
