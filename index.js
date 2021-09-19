let hamburgerBtn = document.querySelector('.header__hamburger');
let menu = document.querySelector('.header__menu');



hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('header__hamburger_active');
    menu.classList.toggle('header__menu_active');
})