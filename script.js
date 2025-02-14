// Initialize slide index to default (first slide)
let slideIndex = 1;

// Open the lightbox and display the current slide
function openLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "block";
        showSlide(slideIndex);
    } else {
        console.error("Lightbox element not found!");
    }
}

// Close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    } else {
        console.error("Lightbox element not found!");
    }
}

// Navigate to the next or previous slide
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Display a specific slide based on its index
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Core function to display the correct slide
function showSlide(n) {
    const slides = document.getElementsByClassName("lightbox-slide");

    if (slides.length === 0) {
        console.error("No slides found!");
        return;
    }

    // Loop to the first slide if index exceeds total slides
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Loop to the last slide if index is less than 1
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Enable lightbox for all images inside blog section
document.querySelectorAll('#blog img').forEach(image => {
    image.addEventListener('click', function () {
        openLightbox();
    });
});

// Expand/collapse blog posts
document.querySelectorAll('.blog-title').forEach(title => {
    title.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Optional: Add keyboard navigation support
document.addEventListener("keydown", function (event) {
    const lightbox = document.getElementById("lightbox");
    if (lightbox && lightbox.style.display === "block") {
        if (event.key === "ArrowRight") {
            changeSlide(1); // Navigate to next slide
        } else if (event.key === "ArrowLeft") {
            changeSlide(-1); // Navigate to previous slide
        } else if (event.key === "Escape") {
            closeLightbox(); // Close lightbox
        }
    }
});
