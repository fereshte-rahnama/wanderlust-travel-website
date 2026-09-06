'use strict'


// hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// search icon

const searchBoxEl = document.querySelector('.search-box');
const searchIconEl = document.querySelector('.search-icon');

searchIconEl.addEventListener('click', () => {
    searchBoxEl.classList.toggle('active');
});


// email and password input
const emailInp = document.querySelector("#email");
const passInp = document.querySelector("#password");


// regex
const higherReg = document.querySelector("#higher");
const lowerReg = document.querySelector("#lower");
const numberReg = document.querySelector("#number");
const lengthReg = document.querySelector("#length");
const specialReg = document.querySelector("#special");
const emailReg = document.querySelector("#email-reg");


function regexValidation(e, regex, value) {
  if (regex.test(value)) {
    e.classList.add("valid");
    e.classList.remove("inValid");
  } else {
    e.classList.remove("valid");
    e.classList.add("inValid");
  }
}

passInp.addEventListener("input", () => {
  const value = passInp.value;

  regexValidation(higherReg, /[A-Z]/, value);
  regexValidation(lowerReg, /[a-z]/, value);
  regexValidation(numberReg, /[0-9]/, value);
  regexValidation(specialReg, /[#?!@$ %^&*-]/, value);
  regexValidation(lengthReg, /.{8,}/, value);
});

emailInp.addEventListener("input", () => {
  const value = emailInp.value;
  regexValidation(emailReg, /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/, value);
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
  console.log('COOKIE CLICKED');
    modalContainerEl.classList.add('show')
})
closeModalEl.addEventListener('click',()=>{
    modalContainerEl.classList.remove('show')
})





