"use strict";

document.addEventListener("DOMContentLoaded", fetchFiles);
const text_content = document.querySelector(".text_content");
const video_content = document.querySelector(".video_content");

let index = 0;

let camillaVideo;

function fetchFiles() {

    const video1 = fetch("elements/video1.svg").then(r => r.text());
    const circle2 = fetch("elements/test.svg").then(r => r.text());

    Promise
        .all([video1])
        .then(
            function(responses) {
                const [video1] = responses;
                // document.querySelector(".video_container").innerHTML = circle;
                camillaVideo = video1;
                // document.querySelector(".video_container").innerHTML += circle2;
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
        nextFunction && nextFunction();
    }
}

function run2ndScreen() {
    console.log("Running 2nd screen");

    let textContent = "Project by:";

    typewriterEffect(textContent, run3rdScreen);
}

function run3rdScreen() {
    console.log("Running 3rd screen");
    text_content.style.display = "none";
    video_content.innerHTML = camillaVideo;
}