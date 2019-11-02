"use strict";

document.addEventListener("DOMContentLoaded", fetchFiles);
const video_container = document.querySelector(".video_container");
const text_content = document.querySelector(".text_content");

let index = 0;

let camillaVideo;
let logo;
let camilla;

function fetchFiles() {

    const camillaVideoSVG = fetch("elements/video1.svg").then(r => r.text());
    const logoSVG = fetch("elements/Pc.svg").then(r => r.text());
    const camillaSVG = fetch("elements/Camilla.svg").then(r => r.text());

    Promise
        .all([camillaVideoSVG, logoSVG, camillaSVG])
        .then(
            function(responses) {
                const [camillaVideoSVG, logoSVG, camillaSVG] = responses;
                camillaVideo = camillaVideoSVG;
                logo = logoSVG;
                camilla = camillaSVG;
                run1stScreen();
            }
        );
}

function run1stScreen() {
    console.log("Running 1st screen");
    let textContent = "Assignment: 14C.01.05 GTA intro";
    text_content.classList.add("intro_text");

    typewriterEffect(textContent, run2ndScreen);
}

function typewriterEffect(text, nextFunction) {
    if (index <= text.length) {
        text_content.textContent = text.substring(0, index);
        index++;
        setTimeout(function() {
    typewriterEffect(text, nextFunction);
            }
    , 80);
    }
    else {
        index = 0;
        nextFunction && nextFunction();
    }
}

function run2ndScreen() {
    text_content.classList.remove("intro_text");
    text_content.classList.add("logo_text");
    console.log("Running 2nd screen");

    let textContent = "Project by:";
    typewriterEffect(textContent, run2ndScreenPt2);
}

function run2ndScreenPt2() {
        video_container.innerHTML += `<div class="logo">${logo}</div>`;
        video_container.addEventListener("animationend", function _function() {
            setTimeout(run3rdScreen, 2000);
            video_container.removeEventListener("animationend", _function);
        });
}

function run3rdScreen() {
    text_content.style.display = "none";
    video_container.innerHTML = camillaVideo;

    setTimeout(run4thScreen, 2000);
}

function run4thScreen() {
    console.log("4");
    video_container.innerHTML = `<div class="character">${camilla}</div>`;

}