'use strict'

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let slideTimer;

function nextSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function prevSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

function startTimer() {
    clearInterval(slideTimer);

    slideTimer = setInterval(() => {
        nextSlide();
    }, 5000);
}

next.addEventListener('click', () => {
    nextSlide();
    startTimer();
});

prev.addEventListener('click', () => {
    prevSlide();
    startTimer();
});

startTimer();

// search icon

const searchBoxEl = document.querySelector('.search-box');
const searchIconEl = document.querySelector('.search-icon');

searchIconEl.addEventListener('click', () => {
    searchBoxEl.classList.toggle('active');
});

// cookie modal
const modalContainerEl=document.querySelector('.modal-container')
const closeModalEl=document.querySelector('.close-btn')
const openCookieEl=document.querySelector('.cookie')

window.addEventListener('click',(e)=>{
    if(!e.target.closest('.modal') && !e.target.closest('.cookie')){
        modalContainerEl.classList.remove('show')

    }
})

openCookieEl.addEventListener('click',()=>{
    modalContainerEl.classList.add('show')
})
closeModalEl.addEventListener('click',()=>{
    modalContainerEl.classList.remove('show')
})


const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});



