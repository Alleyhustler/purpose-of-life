const image = document.querySelector('.center-image');
const scrollingImages = document.querySelector('.scrolling-images');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth - 0.5) * 20; // Adjust sensitivity
    const y = (clientY / window.innerHeight - 0.5) * 20; // Adjust sensitivity
    image.style.transform = `translate(${x}px, ${y}px)`;
});

// Automatic scrolling function
const scrollSpeed = 1; // Speed of scrolling
let lastScrollPos = 0;

function scrollImages() {
    lastScrollPos += scrollSpeed;
    scrollingImages.style.transform = `translateX(-${lastScrollPos}px)`;

    // Check if an image has scrolled past the left edge
    const firstImage = scrollingImages.firstElementChild;
    if (firstImage.getBoundingClientRect().right < 0) {
        // Move it to the end of the list
        scrollingImages.appendChild(firstImage);
        lastScrollPos -= firstImage.offsetWidth + 10; // Adjust position
    }

    requestAnimationFrame(scrollImages); // Repeat the scrolling
}

// Start scrolling
scrollImages();
