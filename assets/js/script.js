var aboutSection = $("#about");
var workSection = $("#work");
var aboutNav = $("#about-button-nav");
var workNav = $("#work-button");
var contactNav = $("#contact-button");
var downButton = $("#about-jump");
var bell = $("#bell");
var media = $("#media-display");
var bell2 = $("#trymediatwo");


//Adds event listeners for nav buttons
downButton.on("click", showAboutAlt);
aboutNav.on("click", showAbout);
workNav.on("click", showWork);
// bell.on("click", showMedia);

bell.first().click(function() {
    media.first().fadeToggle(2000, "linear");
});

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

// function showMedia () {
//     // media.css("display", "block");
// }