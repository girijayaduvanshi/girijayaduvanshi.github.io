let slideIndex = 1; // Default slide index

// Open the lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    showSlide(slideIndex);
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Change slide based on navigation (next/previous)
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Show the current slide based on the index
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Display the correct slide
function showSlide(n) {
    let slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Go to the last slide
    }
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}
