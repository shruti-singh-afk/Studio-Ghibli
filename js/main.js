
import { setupHeader } from './header.js';
import { loadFilms } from './films.js';
import { loadCharacters } from './characters.js';
import { setupCursor } from './cursor.js';
import { setupModal } from './modal.js';


document.addEventListener('DOMContentLoaded', () => {
  
  setupHeader();
  loadFilms();
  loadCharacters();
  setupCursor();
  setupModal();
  
  
  preloadImages();
 
  setupSmoothScroll();
});


function preloadImages() {
  const imageUrls = [
    './img/cloud.svg',
    './img/totoro-silhouette.svg',
    './img/logo.svg',
    './img/soot-sprite.svg',
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}


function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const navHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const nav = document.querySelector('.nav');
      const menuToggle = document.querySelector('.menu-toggle');
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });
}

const carouselContainer = document.querySelector('.carousel-container');
const nextBtn = document.querySelector('.carousel-next');
const prevBtn = document.querySelector('.carousel-prev');

nextBtn.addEventListener('click', () => {
  carouselContainer.scrollBy({
    left: 300, // adjust scroll distance as needed
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  carouselContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});


