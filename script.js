// Buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonsContainer = document.querySelector('.buttons');
const animation = document.getElementById('animation');
const gallery = document.getElementById('gallery');
const poem = document.getElementById('poem');

// No Button Jump Logic
noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${Math.random() * 80 + 10}%`; // Random vertical position
    noBtn.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
});

// Yes Button Click Logic
yesBtn.addEventListener('click', () => {
    // Hide buttons container
    buttonsContainer.classList.add('hidden');

    // Show hearts animation
    animation.classList.remove('hidden');

    // Transition to gallery and poem after animation
    setTimeout(() => {
        animation.classList.add('hidden'); // Hide hearts animation
        gallery.classList.remove('hidden'); // Show Swiper gallery
        poem.classList.remove('hidden'); // Show Poem
    }, 3000); // Simulated delay for animation
});
const downloadBtn = document.getElementById('downloadBtn');


// Initialize Swiper with Auto-Swipe Configuration and Custom Animation
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2000, // Auto-swiping every 2 seconds
        disableOnInteraction: false, // Continue auto-swiping even after interaction
    },
    effect: 'flip', // Flip effect for animation
    flipEffect: {
        slideShadows: false,
        limitRotation: true, // Ensures smooth rotation effect
    },
    speed: 600, // Adjust slide transition speed
});
