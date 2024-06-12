// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is connected!");
});


// Get the scrollToTop button element
const toTopButton = document.querySelector('.to_top');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }
});

// Scroll to the top of the document when the button is clicked
toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Add smooth scrolling effect
    });
});
