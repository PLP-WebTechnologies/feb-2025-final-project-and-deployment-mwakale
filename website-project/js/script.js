// This file contains JavaScript code for interactivity, including form validation and other interactive elements.

document.addEventListener("DOMContentLoaded", function() {
    // Form validation for contact form
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                event.preventDefault();
            } else {
                alert("Thank you for your message!");
            }
        });
    }

    // Example function for an image slider (if needed in the future)
    function initImageSlider() {
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? "block" : "none";
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Initialize image slider if there are slides
    if (document.querySelectorAll(".slide").length > 0) {
        initImageSlider();
    }
});