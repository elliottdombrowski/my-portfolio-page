var aboutCont = $(".about-container");
var aboutNav = $("#about-button-nav");
var media = $("#media-display");

var pages = [
    homeSection = $("#home-page"),
    aboutSection = $("#about-page"),
    workSection = $("#work-page"),
    contactSection = $("#contact-page")
]

//Adds event listeners for buttons

//fades in/out hidden media link nav bar
var bell = $("#bell");
bell.first().click(function() {
    media.first().fadeToggle(1000, "linear");
});

//fades out main page to about page
var downButton = $("#about-button");
downButton.click(function() {
    homeSection.fadeOut(2000);
    //waits until home page animation is finished to start about page animation
    homeSection.promise().done(function(){
        aboutSection.fadeIn(2000);
    });
});

//fades out page to work page
var workNav = $("#work-button");
workNav.click(function() {
    aboutSection.fadeOut(2000);
    //waits until cur page animation is finished
    aboutSection.promise().done(function() {
        workSection.fadeIn(2000);
    });
});

//fades out page to contact page
var contactNav = $("#contact-button");
contactNav.click(function() {
    workSection.fadeOut(2000);
    workSection.promise().done(function() {
        contactSection.fadeIn(2000);
    });
});

//flashing effect on about page down 
var aboutDown = $("#about-down");
$(document).ready(() => {
    setInterval(() => {
        aboutDown.fadeIn("slow", "linear");
        aboutDown.fadeOut("slow", "linear");
    }, 3000);
});