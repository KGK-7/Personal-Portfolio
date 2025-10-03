let prevScrollPos = window.pageYOffset;
let scrollTimeout;

// Hamburger and nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');      // slide menu
  hamburger.classList.toggle('active');   // animate hamburger
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const currentScrollPos = window.pageYOffset;

  // Hide navbar on scroll down
  if (currentScrollPos > prevScrollPos) {
    navbar.style.top = "-80px"; // move navbar out of view
    navbar.style.opacity = "0";
  } else {
    navbar.style.top = "0";
    navbar.style.opacity = "1";
  }

  // Reset previous scroll position
  prevScrollPos = currentScrollPos;

  // Show navbar after scrolling stops for 200ms
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    navbar.style.top = "0";
    navbar.style.opacity = "1";
  }, 200);
});

// Optional: close mobile menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});
