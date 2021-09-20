var aboutCont = $(".about-container");
var media = $("#media-display");
var navLinks = $(".nav-link-button")
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

var pages = [
  (homeSection = $("#home-page")),
  (aboutSection = $("#about-page")),
  (workSection = $("#work-page")),
  (contactSection = $("#contact-page")),
];

hamburger.addEventListener("click", mobileMenu);
navLinks.on("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// function hideBurger() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     console.log("toggled");
// }

//fades in/out hidden media link nav bar
var bell = $("#bell");
bell.first().click(function () {
  media.first().fadeToggle(1000, "linear");
  media.css("display", "flex");
});

// fades out main page to about page
var currIndex = 0;
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

//grabbed all nav elements with nav-link-button class
//.each loops through all + gets index of loop
navLinks.each(function(i) {
    //this refers to whichever index pos. is currenting being used??
    $(this).click(function () {
        toSection(i+1);
        clearInterval(interval);
      });
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