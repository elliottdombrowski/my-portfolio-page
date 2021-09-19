var aboutCont = $(".about-container");
var media = $("#media-display");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

var pages = [
  (homeSection = $("#home-page")),
  (aboutSection = $("#about-page")),
  (workSection = $("#work-page")),
  (contactSection = $("#contact-page")),
];

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//Adds event listeners for buttons
var currIndex = 0;

//fades in/out hidden media link nav bar
var bell = $("#bell");
bell.first().click(function () {
  media.first().fadeToggle(1000, "linear");
  media.css("display", "flex");
});

// fades out main page to about page
var downButton = $("#about-button");
downButton.click(function () {
  pages[currIndex].fadeOut(2000);
  //waits until home page animation is finished to start about page animation
  pages[currIndex].promise().done(function () {
    aboutSection.fadeIn(2000);
    currIndex = 1;
  });
});

function toSection(index) {
  pages[currIndex].fadeOut(2000);
  pages[currIndex].promise().done(function () {
    pages[index].fadeIn(2000);
    currIndex = index;
  });
}

var aboutNav = $("#about-button-nav");
aboutNav.click(function () {
  toSection(1);
  clearInterval(interval);
});

//fades out page to work page
var workNav = $("#work-button");
workNav.click(function () {
  toSection(2);
  clearInterval(interval);
});

//fades out page to contact page
var contactNav = $("#contact-button");
contactNav.click(function () {
  toSection(3);
  clearInterval(interval);
});

//BUTTON HANDLERS FOR MOBILE NAV
var aboutMobile = $("#about-button-mobile");
aboutMobile.click(function () {
  toSection(1);
  clearInterval(interval);
});

var workMobile = $("#about-button-mobile");
workMobile.click(function () {
  toSection(2);
  clearInterval(interval);
});

var contactMobile = $("#contact-button-mobile");
contactMobile.click(function () {
  toSection(3);
  clearInterval(interval);
});

//slideshow function
var downButton = $("#about-button");
var interval;
var timer = 35;
downButton.on("click", function () {
  interval = setInterval(slideShow, 1000);
});

function slideShow() {
  timer--;
  if (timer <= 0) {
    clearInterval(interval);
  } else if (timer === 35) {
    toSection(1);
  } else if (timer === 20) {
    toSection(2);
  } else if (timer === 5) {
    toSection(3);
  }
}

//flashing effect on about page down
var aboutDown = $("#about-down");
$(document).ready(() => {
  setInterval(() => {
    aboutDown.fadeIn("slow", "linear");
    aboutDown.fadeOut("slow", "linear");
  }, 3000);
});
