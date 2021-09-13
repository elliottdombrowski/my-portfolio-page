var aboutSection = $("#about-page");
var aboutCont = $(".about-container");
var homeSection = $("#home-page");
var workSection = $("#work-page");
var contactSection = $("#contact-page");
var aboutNav = $("#about-button-nav");
var workNav = $("#work-button");
var contactNav = $("#contact-button");
var downButton = $("#about-button");
var aboutDown = $("#about-down");
var bell = $("#bell");
var media = $("#media-display");


//Adds event listeners for buttons

//fades in/out hidden media link nav bar
bell.first().click(function() {
    media.first().fadeToggle(2000, "linear");
});

//fades out main page to about page
downButton.click(function() {
    homeSection.fadeOut(2000);
    //waits until home page animation is finished to start about page animation
    homeSection.promise().done(function(){
        aboutSection.fadeIn(2000);
    });
});

//fades out 

//flashing effect on about page down btn
$(document).ready(() => {
    setInterval(() => {
        aboutDown.fadeIn("slow", "linear");
        aboutDown.fadeOut("slow", "linear");
    }, 3000);
});