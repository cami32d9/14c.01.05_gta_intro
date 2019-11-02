"use strict";

document.addEventListener("DOMContentLoaded", fetchFiles);
const video_container = document.querySelector(".video_container");
const text_content = document.querySelector(".text_content");

let index = 0;

let camillaVideo;
let logo;
let camilla;
let julie;


// Font scaling function from:
// https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container/20968345#20968345
document.body.setScaledFont = function(f) {
    var s = this.offsetWidth, fs = s * f;
    this.style.fontSize = fs + '%';
    return this
};

document.body.setScaledFont(0.12);
window.onresize = function() {
    document.body.setScaledFont(0.12);
}

function fetchFiles() {

    const camillaVideoSVG = fetch("elements/video1.svg").then(r => r.text());
    const logoSVG = fetch("elements/Pc.svg").then(r => r.text());
    const camillaSVG = fetch("elements/Camilla.svg").then(r => r.text());
    const julieSVG = fetch("elements/Julie.svg").then(r => r.text());

    Promise
        .all([camillaVideoSVG, logoSVG, camillaSVG, julieSVG])
        .then(
            function(responses) {
                const [camillaVideoSVG, logoSVG, camillaSVG, julieSVG] = responses;
                camillaVideo = camillaVideoSVG;
                logo = logoSVG;
                camilla = camillaSVG;
                julie = julieSVG;
                run1stScreen();
            }
        );
}

// Assignment title
function run1stScreen() {
    console.log("Running 1st screen");
    let textContent = "Assignment: 14C.01.05 GTA intro";
    text_content.classList.add("intro_text");

    typewriterEffect(textContent, run2ndScreen, 2000);
}

// Project by:
function run2ndScreen() {
    text_content.classList.remove("intro_text");
    text_content.classList.add("logo_text");

    let textContent = "Project by:";
    typewriterEffect(textContent, run2ndScreenPt2);
}

// The GameBreakers logo
function run2ndScreenPt2() {
    document.querySelector(".video_content").innerHTML += `<div class="logo">${logo}</div>`;
    document.querySelector(".video_content").addEventListener("animationend", function _function() {
            setTimeout(run3rdScreen, 2000);
        document.querySelector(".video_content").removeEventListener("animationend", _function);
        });
}

// Camilla video
function run3rdScreen() {
    document.querySelector(".text_content").innerHTML = "";
    text_content.classList.remove("logo_text");
    document.querySelector(".video_content").innerHTML = camillaVideo;

    setTimeout(run4thScreen, 5000);
}

// Camilla character
function run4thScreen() {
    document.querySelector(".video_content").innerHTML = "";
    document.querySelector(".character_container").innerHTML = `<div class="character camilla">${camilla}</div>`;
    document.querySelector(".character").addEventListener("animationend", function() {
        document.querySelector(".text_content").classList.add("character_text");
        let textContent = "Camilla The programmer ... and CTR freak";
        typewriterEffect(textContent, run5thScreen, 2000);
    })
}

// Julie video
function run5thScreen() {
    document.querySelector(".character_container").innerHTML = "";
    document.querySelector(".text_content").innerHTML = "";
    text_content.classList.remove("logo_text");
    document.querySelector(".video_content").innerHTML = camillaVideo;

    setTimeout(run6thScreen, 5000);
}

// Julie character
function run6thScreen() {
    document.querySelector(".video_content").innerHTML = "";
    document.querySelector(".text_content").innerHTML = "";
    console.log("4");
    document.querySelector(".character_container").innerHTML = `<div class="character julie">${julie}</div>`;
    document.querySelector(".character").addEventListener("animationend", function() {
        console.log("Add text now");
        let textContent = "Julie The illustrator ... and RPG geek";
        typewriterEffect(textContent, run7thScreen);
    })
}

// Group picture
function run7thScreen() {
    document.querySelector(".video_content").innerHTML = "";
    document.querySelector(".text_content").innerHTML = "";
    console.log("4");
    document.querySelector(".character_container").innerHTML = `<div class="character julie">${julie}</div> <div class="character camilla">${camilla}</div>`;
    document.querySelector(".character").addEventListener("animationend", function() {
        console.log("Add text now");
        document.querySelector(".text_content").classList.add("intro_text");
        let textContent = "We're gonna leave early ... to play games";
        typewriterEffect(textContent);
    })
}

// --------------------------------------------

function typewriterEffect(text, nextFunction, delay) {
    console.log(delay);
    if (index <= text.length) {
        document.querySelector(".text_content").innerHTML = text.substring(0, index);
        index++;
        setTimeout(function() {
                typewriterEffect(text, nextFunction, delay);
            }
            , 80);
    }
    else {
        index = 0;
        setTimeout(nextFunction && nextFunction
            , delay);
    }
}