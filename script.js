"use strict";

document.addEventListener("DOMContentLoaded", fetchFiles);
const video_container = document.querySelector(".video_container");
const text_content = document.querySelector(".text_content");

let index = 0;

let camillaVideo;
let logo;

function fetchFiles() {

    const video1 = fetch("elements/video1.svg").then(r => r.text());
    const logoSVG = fetch("elements/Pc.svg").then(r => r.text());

    Promise
        .all([video1, logoSVG])
        .then(
            function(responses) {
                const [video1, logoSVG] = responses;
                camillaVideo = video1;
                logo = logoSVG;
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
    setTimeout(function() {
        video_container.innerHTML += `<div class="logo">${logo}</div>`;
        // setTimeout(run3rdScreen, 2000);
    }, 2000)
}

function run3rdScreen() {
    console.log("Running 3rd screen");
    text_content.style.display = "none";
    video_container.innerHTML = camillaVideo;
    console.log("Still working");
}