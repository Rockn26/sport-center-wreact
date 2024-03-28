import React from 'react'
import './OurClasses.style.css'

const yogaButton = document.querySelector('#yoga-button')
const groupButton = document.querySelector('#group-button')
const soloButton = document.querySelector('#solo-button')
const stretchingButton = document.querySelector('#stretching-button')
const buttons = document.querySelectorAll('.classes-button button');

yogaButton.addEventListener('click', handleYoga)
groupButton.addEventListener('click', handleGroup)
soloButton.addEventListener('click', handleSolo)
stretchingButton.addEventListener('click', handleStretching)

let classesBottom = document.querySelector('#classes-bottom')

const OurClasses = () => {

    function clearButtons() {
        buttons.forEach(button => {
            // Her butonun arka planını varsayılan rengine döndür
            button.style.backgroundColor = '#355592'; // Varsayılan mavi
            button.style.color = 'white'; // Yazı rengi
        });
    }
    
    
    function handleYoga(){
        clearButtons();
        yogaButton.style.backgroundColor = '#ffa07a'; // Seçili butonun arka plan rengi
        yogaButton.style.color = 'white';
    
        classesBottom.innerHTML = `<div class="classes-text">
        <div class="classes-text-top">
            <h2 class="black-bold">Why are your Yoga?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores vitae reprehenderit doloremque! Minima, quod doloribus. Esse consectetur illum excepturi delectus, recusandae culpa mollitia atque cumque repudiandae eos tenetur alias.</p>
        </div>
        <div class="classes-text-bottom">
            <h2>When comes Yoga your time?</h2>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
        </div>
    </div>
    <div class="classes-img">
        <img src="assets/yoga.jpg" alt="Yoga">
    </div>`
    }
    
    function handleGroup(){
        clearButtons();
        groupButton.style.backgroundColor = '#ffa07a'; // Seçili butonun arka plan rengi
        groupButton.style.color = 'white';
    
        classesBottom.innerHTML = `<div class="classes-text">
        <div class="classes-text-top">
            <h2 class="black-bold">Why are your Group?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores vitae reprehenderit doloremque! Minima, quod doloribus. Esse consectetur illum excepturi delectus, recusandae culpa mollitia atque cumque repudiandae eos tenetur alias.</p>
        </div>
        <div class="classes-text-bottom">
            <h2>When comes Yoga your time?</h2>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
        </div>
    </div>
    <div class="classes-img">
        <img src="assets/group.webp" alt="Group">
    </div>`
    }
    
    function handleSolo(){
        clearButtons();
        soloButton.style.backgroundColor = '#ffa07a'; // Seçili butonun arka plan rengi
        soloButton.style.color = 'white';
    
        classesBottom.innerHTML = `<div class="classes-text">
        <div class="classes-text-top">
            <h2 class="black-bold">Why are your Solo?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores vitae reprehenderit doloremque! Minima, quod doloribus. Esse consectetur illum excepturi delectus, recusandae culpa mollitia atque cumque repudiandae eos tenetur alias.</p>
        </div>
        <div class="classes-text-bottom">
            <h2>When comes Yoga your time?</h2>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
        </div>
    </div>
    <div class="classes-img">
        <img src="assets/solo.jpg" alt="Solo">
    </div>`
    }
    
    function handleStretching(){
        clearButtons();
        stretchingButton.style.backgroundColor = '#ffa07a'; // Seçili butonun arka plan rengi
        stretchingButton.style.color = 'white';
    
        classesBottom.innerHTML = `<div class="classes-text">
        <div class="classes-text-top">
            <h2 class="black-bold">Why are your Stretching?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores vitae reprehenderit doloremque! Minima, quod doloribus. Esse consectetur illum excepturi delectus, recusandae culpa mollitia atque cumque repudiandae eos tenetur alias.</p>
        </div>
        <div class="classes-text-bottom">
            <h2>When comes Yoga your time?</h2>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
        </div>
    </div>
    <div class="classes-img">
        <img src="assets/stret.webp" alt="Stret">
    </div>`
    }
    
  return (
    <div>
    <section class="classes" id="classes">
        <div class="classes-top">
            <h2 class="text-title">OUR CLASSES</h2>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney Collage.
            </p>
            <div class="classes-button">
                <button id="yoga-button">
                    Yoga
                </button>
                <button id="group-button">
                    Group
                </button>
                <button id="solo-button">
                    Solo
                </button>
                <button id="stretching-button">
                    Stretching
                </button>
            </div>
            <div class="classes-bottom" id="classes-bottom">
                <div class="classes-text">
                    <div class="classes-text-top">
                        <h2 class="black-bold">Why are your Yoga?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores vitae reprehenderit
                            doloremque! Minima, quod doloribus. Esse consectetur illum excepturi delectus, recusandae culpa
                            mollitia atque cumque repudiandae eos tenetur alias.</p>
                    </div>
                    <div class="classes-text-bottom">
                        <h2 class="black-bold">When comes Yoga your time?</h2>
                        <p>Saturday-Sunday: 8:00am - 10:00am</p>
                        <p>Saturday-Sunday: 8:00am - 10:00am</p>
                        <p>Saturday-Sunday: 8:00am - 10:00am</p>
                    </div>
                </div>
                <div class="classes-img">
                    <img src="assets/yoga.jpg" alt="Yoga" />
                </div>
            </div>
        </div>
       

    </section>
      
    </div>
  )
}

export default OurClasses
