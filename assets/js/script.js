var aboutSection = $("#about");
var workSection = $("#work");
var aboutNav = $("#about-button-nav");
var workNav = $("#work-button");
var contactNav = $("#contact-button");
var downButton = $("#about-jump");


//Adds event listeners for nav buttons
downButton.on("click", showAboutAlt);
aboutNav.on("click", showAbout);
workNav.on("click", showWork);


//On respective button click, sets visibility for respective section.
function showAbout() {
    aboutSection.css("display", "flex");
}

function showAboutAlt() {
    aboutSection.css("display", "flex");
}

function showWork() {
    aboutSection.css("display", "flex");
    workSection.css("display", "flex");
}