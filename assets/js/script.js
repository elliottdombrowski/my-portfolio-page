var aboutCont = $(".about-container");
var media = $("#media-display");

var pages = [
    homeSection = $("#home-page"),
    aboutSection = $("#about-page"),
    workSection = $("#work-page"),
    contactSection = $("#contact-page")
]

//Adds event listeners for buttons
var currIndex = 0;

//fades in/out hidden media link nav bar
var bell = $("#bell");
bell.first().click(function() {
    media.first().fadeToggle(1000, "linear");
});

//fades out main page to about page
// var downButton = $("#about-button");
// downButton.click(function() {
//     pages[currIndex].fadeOut(2000);
//     //waits until home page animation is finished to start about page animation
//     pages[currIndex].promise().done(function(){
//         aboutSection.fadeIn(2000);
//         currIndex = 1;
//     });
// });

function toSection(index) {
    pages[currIndex].fadeOut(2000);
    pages[currIndex].promise().done(function() {
        pages[index].fadeIn(2000);
        currIndex = index;
    });
}

var aboutNav = $("#about-button-nav");
aboutNav.click(function() {
    toSection(1);
});

//fades out page to work page
var workNav = $("#work-button");
workNav.click(function() {
    toSection(2);
});

//fades out page to contact page
var contactNav = $("#contact-button");
contactNav.click(function() {
    toSection(3);
});

//slideshow function
var downButton = $("#about-button");
var timer = 10;
// downButton.click(setInterval(function() {
//     timer--;
//     console.log(timer);

//     if (timer === 0) {
//         clearInterval();
//     }
// }, 1000));
downButton.click(slideShow())

function slideShow() {
    setInterval(function() {
        timer--;
        console.log(timer);

        if (timer >= 0) {
            clearInterval();
            console.log("timer done");
        }
    }, 1000);
}

//flashing effect on about page down 
var aboutDown = $("#about-down");
$(document).ready(() => {
    setInterval(() => {
        aboutDown.fadeIn("slow", "linear");
        aboutDown.fadeOut("slow", "linear");
    }, 3000);
});