var homePage = document.querySelector('.homePage')
var giaiDapBtn = document.querySelector('.giaidap-btn')
var trangchuBtn = document.querySelector('.trangChuBtn')
var giaiDap = document.querySelector('.giaidap')

giaiDapBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    homePage.classList.add('hide')
    giaiDap.classList.remove('hide')


})

trangchuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    giaiDap.classList.add('hide')
    homePage.classList.remove('hide')


})