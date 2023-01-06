const hamburger = document.querySelector('.menu-bars');
const mobileNav = document.querySelector('#mobile-nav');
const navLInks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('#logo');
const closeButton = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  // toggle mobileNav when hamburger is clicked
    mobileNav.style.display = 'block';
    logo.style.display = 'none';
  closeButton.style.display = 'block';
  hamburger.style.display = 'none';
  });

  // When the close button is clicked
closeButton.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  logo.style.display = 'block';
  hamburger.style.display = 'block';
  closeButton.style.display = 'none';
  })


// close mobileNav when navLink is clicked
navLInks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.style.display = "none";
    logo.style.display = "block";
    hamburger.style.display = "block";
  closeButton.style.display = 'none';

  })
})