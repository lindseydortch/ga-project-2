// ==================================================================
// Bringing in Elements 
// ==================================================================
const menuBtn = document.querySelector('#menu')
const closeBtn = document.querySelector('#closeBtn')
const nav = document.querySelector('.nav')

openMenu = () => {
  nav.classList.add('navActive')
}

closeMenu = () => {
  nav.classList.remove('navActive')
}

menuBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)