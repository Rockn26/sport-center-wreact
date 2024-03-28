import React from 'react'
import './Hero.style.css'

const Hero = () => {
  return (
    <div>
        <section class="hero" id="hero">
        <div class="hero-text">
            <h4>POWERFULL</h4>
            <h2>GROUP</h2>
            <h2>PRACTICE</h2>
            <h2>WITH TRAINER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa suscipit inventore nisi
                perferendis
                nam corrupti, provident doloremque architecto. Quam alias asperiores debitis sunt ad labore nulla,
                voluptatum totam amet?
                In obcaecati cumque sit velit atque voluptatum non deleniti, facere nisi ratione, dolores aut
                dignissimos,
                ut inventore. Porro fuga eveniet consequatur eligendi quos dicta. Perspiciatis vero commodi labore
                magnam
                molestiae?</p>
            <div class="hero-button">
                <button class="button-colorfull">
                    Sign Up
                </button>
                <button class="button">
                    Details
                </button>
            </div>
        </div>
    </section>
    <section class="info">
        <div class="info-box">
            <div class="bold">325</div>
            <div class="black">Course</div>
        </div>
        <div class="info-box">
            <div class="bold">405</div>
            <div class="black">Workout</div>
        </div>
        <div class="info-box">
            <div class="bold">305</div>
            <div class="black">Working Hour</div>
        </div>
        <div class="info-box">
            <div class="bold">705</div>
            <div class="black">Happy Client</div>
        </div>
    </section>
      
    </div>
  )
}

export default Hero
