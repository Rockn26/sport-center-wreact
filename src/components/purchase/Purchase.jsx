import React from 'react'
import './Purchase.style.css'

const height = document.querySelector("#height");
const weight = document.querySelector("#weight")
const arrow = document.querySelector(".bmi-arrow")


const Purchase = () => {
    let BMI = height.addEventListener("input", () => {
        let bmi = weight.value / ((height.value / 100) * (height.value / 100));
        let value = (bmi - 16) * 4.16;
        if(value < 0 ) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        } else {
            arrow.style.left = value + "%"
        }
    });
    
    weight.addEventListener("input", () => {
        let bmi = weight.value / ((height.value / 100) * (height.value / 100));
        let value = (bmi - 16) * 4.16;
        if(value < 0 ) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        } else {
            arrow.style.left = value + "%"
        }
    })


  return (
    <div>

    <section class="bmi-section">
        <div class="bmi-container">
            <div class="bmi-content">
                <h2 class="bmi-title">BMI Calculator</h2>
                <p class="bmi-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    pice of classical
                    Latin literature from 45 BC, making it over 2000 years. old</p>
                <p class="bmi-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    pice of classical
                    Latin literature from 45 BC, making it over 2000 years. old</p>
                <form class="bmi-form">
                    <input type="number" id="height" placeholder="Your Height (cm)" />
                    <p>cm</p>
                    <input type="number" id="weight" placeholder="Your Weight (kg)" />
                    <p>kg</p>
                </form>
            </div>
            <div class="bmi-image">
                <img src="assets/bmi-index.jpg" alt="BMI Chart" />
                <div id="bmi-arrow" class="bmi-arrow"></div>
            </div>
        </div>
    </section>

    <section class="trainers-section" id="trainers">
        <h2>OUR BEST TRAINERS</h2>
        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney Collage.</p>
        <div class="trainers">
            <div class="trainer-card">
                <div class="horizontal-bar"></div>
                <div class="vertical-bar"></div>
                <img src="assets/trainer1.jpg" alt="Trainer 1" />
                <div class="trainer-name">
                    <span>Cansu Dere</span>
                    <span>Yoga Trainer</span>
                </div>
            </div>
            <div class="trainer-card">
                <img src="assets/trainer2.jpg" alt="Trainer 2" />
                <div class="horizontal-bar"></div>
                <div class="vertical-bar"></div>
                <div class="trainer-name">
                    <span>Ersin Mutlu</span>
                    <span>Fitness Trainer</span>
                </div>
            </div>
            <div class="trainer-card">
                <img src="assets/trainer3.jpg" alt="Trainer 3" />
                <div class="horizontal-bar"></div>
                <div class="vertical-bar"></div>
                <div class="trainer-name">
                    <span>Nazlı Can</span>
                    <span>Cardio Trainer</span>
                </div>
            </div>
        </div>
    </section>

    <section class="purchase-section">
        <div class="purchase-container">
            <h2>PURCHASE FROM US</h2>
            <p class="purchase-text">Lorem ipsum dolor is not simply random text. It has roots in a piece of classical
                at Hamdpen-Sydney Collage</p>
            <div class="product-cards">
                <div class="product-card">
                    <img src="assets/purchase1.jpg" alt="Purchase-1" />
                    <h3>Kettlebell / 5kg</h3>
                    <p class="price">
                        <span class="price-original">89.99$$</span>
                        /
                        <span class="price-sale"> 59.99$</span>
                    </p>
                    <button><span class="emoji">🛒</span> Add To Cart</button>
                </div>
                <div class="product-card">
                    <img src="assets/purchase2.jpg" alt="Purchase-2" />
                    <h3>Treadmill</h3>
                    <p class="price">
                        <span class="price-original">899.99$$</span>
                        /
                        <span class="price-sale"> 599.99$</span>
                    </p>
                    <button><span class="emoji">🛒</span> Add To Cart</button>
                </div>
                <div class="product-card">
                    <img src="assets/purchase3.jpg" alt="Purchase-3" />
                    <h3>Adjustable Dumbbell</h3>
                    <p class="price">
                        <span class="price-original">89.99$$</span>
                        /
                        <span class="price-sale"> 59.99$</span>
                    </p>
                    
                    <button><span class="emoji">🛒</span> Add To Cart</button>
                </div>
                <div class="product-card">
                    <img src="assets/purchase4.jpg" alt="Purchase-4" />
                    <h3>Kettlebell/ 3kg</h3>
                    <p class="price">
                        <span class="price-original">89.99$$</span>
                        /
                        <span class="price-sale"> 59.99$</span>
                    </p>
                    <button><span class="emoji">🛒</span> Add To Cart</button>
                </div>
            </div>
        </div>
    </section>


    </div>
  )
}

export default Purchase
