"use strict";

document.addEventListener("DOMContentLoaded", fetchFiles);
const text_content = document.querySelector(".text_content");
const video_content = document.querySelector(".video_content");

let index = 0;
let animationOngoing = false;

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
    let textContent = "Assignment: 14C.01.05 GTA intro";
    text_content.classList.add("intro_text");

    typewriterEffect(textContent, run2ndScreen());
    if (!animationOngoing) {
        console.log("done");
    }
}

function typewriterEffect(text, nextFunction) {
    // animationOngoing = true;
    // if (index <= text.length) {
    //     console.log(index);
    //     text_content.textContent = text.substring(0, index);
    //     index++;
    //     setTimeout(function() {
    // typewriterEffect(text);
    //         }
    // , 200);
    // }
    // else {
        nextFunction;
    // }
}

function run2ndScreen() {
    text_content.style.display = "none";
    video_content.innerHTML = camillaVideo;
}