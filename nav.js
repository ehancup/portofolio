const btnMenu = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav')
const clsMenu = document.querySelector('.btn-close')
const main = document.querySelectorAll('.main')

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

main.addEventListener('scroll', function() {
    navMenu.classList.remove('nav-active')
    btnMenu.classList.remove('btn-active')
    clsMenu.classList.remove('boton')
})