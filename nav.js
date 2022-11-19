const btnMenu = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav')
const clsMenu = document.querySelector('.btn-close')

btnMenu.addEventListener('click', function() {
    navMenu.classList.toggle('nav-active')
    btnMenu.classList.toggle('btn-active')
    clsMenu.classList.toggle('boton')
})

clsMenu.addEventListener('click', function() {
    navMenu.classList.toggle('nav-active')
    btnMenu.classList.toggle('btn-active')
    clsMenu.classList.toggle('boton')
})