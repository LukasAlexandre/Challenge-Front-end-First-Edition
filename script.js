const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const menuIconX = document.querySelector('.menu-icon-x');


function abrirJanela() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuIcon.style.display = 'block'
        menuIconX.style.display = 'none'
    } else {
        menu.style.display = 'block';
        menuIcon.style.display = 'none'
        menuIconX.style.display = 'block'
    }
};

