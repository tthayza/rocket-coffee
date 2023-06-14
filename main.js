const navMobile = document.querySelector('#nav-mobile')
const btnBurger = document.querySelector('#menu-burger-mobile')

function openMenuMobile() {
  navMobile.classList.toggle('active')
  btnBurger.classList.toggle('active')
}
