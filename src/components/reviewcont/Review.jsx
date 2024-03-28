import React from 'react'
import './Review.style.css'

const Review = () => {
  return (
    <div>
        <section class="review-section" id="review">
        <h2>REVIEW CLIENT</h2>
        <p class="review-text">Lorem Ipsum is not simply random text. It has roots in a piece of classical at
            Hampden-Sydney College.</p>
        <div class="review-cards">
            <div class="review-card">
                <div class="client-info">
                    <img src="assets/client1.jpg" alt="Client1" />
                    <div class="client-title">
                        <span>Diet Expert</span><span class="other">CFO</span>
                    </div>
                </div>
                <p class="client-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nihil placeat
                    ratione corrupti! Officiis est pariatur odit, corporis rem porro in eos cupiditate perspiciatis iste
                    fugit laborum earum soluta. Reiciendis?</p>
            </div>
            <div class="review-card">
                <div class="client-info">
                    <img src="assets/client2.jpg" alt="Client2" />
                    <div class="client-title">
                        <span>Cardio Trainer</span><span class="other">CEO</span>
                    </div>
                </div>
                <p class="client-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum omnis sit
                    temporibus est maiores, error impedit necessitatibus dicta vel. Natus praesentium assumenda, iusto
                    ipsum exercitationem cum accusantium atque commodi. Iste.</p>
            </div>
        </div>
    </section>

    <section class="contact-us-section" id="contact">
        <h2>CONTACT US</h2>
        <p class="contact-text">Lorem Ipsum is not simply random text. It has roots in a piece of classical at
            Hampden-Sydney College.</p>

        <div class="contact-us-container">
            <div class="contact-details">
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>Mobile Number</h3>
                        <p>+135 773 321 4442</p>
                    </div>
                    <div class="contact-item">
                        <h3>Emaill Adress</h3>
                        <p>demo@demo.com</p>
                    </div>
                </div>
                <form class="contact-form" />
                    <input type="text" id="name" placeholder="Your Name" />
                    <input type="email" id="email" placeholder="Your Email" />
                    <textarea id="message" placeholder="Your Message"></textarea>
                    <button type="submit">Contact Us !</button>
                <form />
            </div>


            <div class="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.8175786208117!2d30.499505!3d39.766203999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc16697fedd4ef%3A0xddf6d37b69ab993a!2sVi%C5%9Fnelik%2C%20Karanfil%20Sk.%2C%2026020%20Odunpazar%C4%B1%2FEski%C5%9Fehir!5e0!3m2!1str!2str!4v1706887295650!5m2!1str!2str"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Review
