let hamburger = document.querySelector(".menu-bars")
let mobileNav = document.querySelector("#mobile-nav")
let navLInks = document.querySelectorAll(".nav-link")
// let display = document.querySelector(".display")


hamburger.addEventListener("click", () => {
  // mobileNav.style.display = display
  // toggle mobileNav when hamburger is clicked

  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  }
  else {
    mobileNav.style.display = "none";
  }
});

// close mobileNav when navLink is clicked
// navLInks.forEach(link => {
//   link.addEventListener("click", () => {
//     mobileNav.style.display = "none";
//   })
// }) 