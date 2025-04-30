const toggleButton = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});