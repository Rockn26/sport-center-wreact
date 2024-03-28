import React from 'react'
import './Navbar.style.css'

const Navbar = () => {

    document.addEventListener('DOMContentLoaded', function () {
        // Hamburger menü butonu seçiliyor
        var hamburger = document.querySelector('.hamburger');
        // Navigasyon bağlantılarını tutan konteynır seçiliyor
        var navLinks = document.querySelector('.nav-right');
     
        // Hamburger menü butonuna tıklama olayı ekleniyor
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        // Hamburger butonuna 'active' sınıfını ekle/kaldır
        this.classList.toggle('active');
        });
     });


  return (
    <div>
        <nav class="navbar">
            <a href="/" class="nav-logo">
                <img src="assets/logo.png" alt="logo" />
            </a>
            <button class="hamburger" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="nav-right" id="nav-links">
                <a href="#hero">Home</a>
                <a href="#classes">Classes</a>
                <a href="#trainers">Trainer</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
                <button class="join-us">JOIN US</button>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
