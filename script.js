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

// Function to handle navigation and show only the selected section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar a");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = "none"; // Hide all sections
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block"; // Show the selected section
        }
    }

    // Ensure navigation works for all links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });

    // Show "About Me" section by default on page load
    showSection("about");
});

// Enable lightbox for all images inside the blog section
document.querySelectorAll('#blog img').forEach(image => {
    image.addEventListener('click', function () {
        openLightbox();
    });
});

// Expand/collapse blog posts
document.querySelectorAll('.blog-post h3').forEach(title => {
    title.addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Ensure blog content loads dynamically when clicking on "Read More"
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetPostId = this.getAttribute('href').replace('.html', '');
        showSection(targetPostId);
    });
});
