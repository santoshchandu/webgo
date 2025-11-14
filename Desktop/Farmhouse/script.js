// Image array - all farmhouse photos
const images = [
    'Sequence 01.00_00_00_36.Still001.jpg',
    'Sequence 01.00_00_09_47.Still002.jpg',
    'Sequence 01.00_00_41_31.Still003.jpg',
    'Sequence 01.00_01_18_17.Still004.jpg',
    'Sequence 01.00_01_52_27.Still005.jpg',
    'Sequence 01.00_02_07_12.Still006.jpg',
    'Sequence 01.00_02_47_07.Still007.jpg',
    'Sequence 01.00_03_15_10.Still008.jpg',
    'Sequence 01.00_03_30_37.Still009.jpg',
    'Sequence 01.00_05_44_01.Still010.jpg',
    'Sequence 01.00_06_18_12.Still011.jpg',
    'Sequence 01.00_06_22_37.Still012.jpg',
    'Sequence 01.00_06_45_12.Still013.jpg',
    'Sequence 01.00_06_58_47.Still014.jpg',
    'Sequence 01.00_08_13_30.Still015.jpg',
    'Sequence 01.00_09_08_00.Still016.jpg',
    'Sequence 01.00_11_11_21.Still017.jpg',
    'Sequence 01.00_12_53_41.Still018.jpg',
    'Sequence 01.00_14_01_25.Still019.jpg',
    'Sequence 01.00_15_03_06.Still020.jpg',
    'Sequence 01.00_16_04_38.Still021.jpg',
    'Sequence 01.00_16_46_47.Still022.jpg',
    'Sequence 01.00_17_23_17.Still023.jpg',
    'Sequence 01.00_17_49_19.Still024.jpg',
    'Sequence 01.00_18_16_15.Still025.jpg',
    'Sequence 01.00_20_41_16.Still026.jpg',
    'Sequence 01.00_21_00_43.Still027.jpg',
    'Sequence 01.00_22_25_17.Still028.jpg',
    'Sequence 01.00_23_02_10.Still029.jpg',
    'Sequence 01.00_23_17_39.Still030.jpg',
    'Sequence 01.00_24_18_22.Still031.jpg',
    'Sequence 01.00_24_40_26.Still032.jpg',
    'Sequence 01.00_24_57_16.Still033.jpg',
    'Sequence 01.00_25_52_14.Still034.jpg',
    'Sequence 01.00_27_01_05.Still035.jpg',
    'Sequence 01.00_27_45_08.Still036.jpg'
];

let currentImageIndex = 0;

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const galleryGrid = document.getElementById('galleryGrid');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const contactForm = document.getElementById('contactForm');

// Load Gallery Images
function loadGallery() {
    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image}" alt="Farmhouse Image ${index + 1}" loading="lazy">`;
        galleryItem.addEventListener('click', () => openModal(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Modal Functions
function openModal(index) {
    currentImageIndex = index;
    modalImage.src = images[currentImageIndex];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
}

// Modal Event Listeners
modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', showPrevImage);
modalNext.addEventListener('click', showNextImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard Navigation for Modal
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        guests: document.getElementById('guests').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your inquiry! We will contact you shortly.');
    contactForm.reset();
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.amenity-card, .stat-item, .info-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Set minimum date for check-in to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkin').setAttribute('min', today);

// Update checkout minimum date when checkin changes
document.getElementById('checkin').addEventListener('change', (e) => {
    const checkinDate = new Date(e.target.value);
    checkinDate.setDate(checkinDate.getDate() + 1);
    const minCheckout = checkinDate.toISOString().split('T')[0];
    document.getElementById('checkout').setAttribute('min', minCheckout);
});

// Initialize gallery on page load
loadGallery();

// Preload next/previous images in modal for smoother experience
function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images after a short delay
setTimeout(preloadImages, 1000);
