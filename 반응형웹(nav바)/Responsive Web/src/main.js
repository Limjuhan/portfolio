const toggleBtn = document.querySelector('.btn_toggle');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});