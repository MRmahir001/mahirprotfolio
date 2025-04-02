// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="Number"]').value;

    if (!name || !email || !phone) {
        e.preventDefault();
        alert('Please fill out all required fields.');
    }
});

// Fade In Effect
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Typing Animation
const typingText = document.querySelector('.typing-text span');
const words = ['Web Developer', 'Software Developer', 'Web Designer', 'Bot Maker', 'YouTuber'];
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            erase();
        }, 2000);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
