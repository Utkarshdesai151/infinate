// JavaScript to toggle the mobile menu visibility
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle the 'active' class on the mobile menu when hamburger icon is clicked
hamburgerIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('main-menu'); // Toggle the visibility
});


// Select the element
// Select the main circle and overlay elements
const circle = document.querySelector('.circle');
const overlay = document.querySelector('.circle.overlay');

// Add hover effects
circle.addEventListener('mouseenter', () => {
    circle.classList.add('hover-effect'); 
    circle.overlay.classList.add('hover-effect'); 
});

circle.addEventListener('mouseleave', () => {
    circle.classList.remove('hover-effect'); 
    overlay.classList.remove('hover-effect'); 
});

overlay.addEventListener('mouseenter', () => {
    circle.classList.add('hover-effect');
    overlay.classList.add('hover-effect');
});

overlay.addEventListener('mouseleave', () => {
    circle.classList.remove('hover-effect');
    overlay.classList.remove('hover-effect');
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};