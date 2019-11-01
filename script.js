"use strict";

document.addEventListener("DOMContentLoaded", fetchFiles);
const text_content = document.querySelector(".text_content");

let index = 0;

// function fetchSVGs() {
//     fetch('elements/test.svg')
//         .then (r => r.text())
//         .then (text => {
//             document.querySelector(".video_container").innerHTML = text;
//         });
// }

function fetchFiles() {

    const circle = fetch("elements/test.svg").then(r => r.text());
    const circle2 = fetch("elements/test.svg").then(r => r.text());

    Promise
        .all([circle, circle2])
        .then(
            function(responses) {
                const [circle, circle2] = responses;
                // document.querySelector(".video_container").innerHTML = circle;
                // document.querySelector(".video_container").innerHTML += circle2;
                run1stScreen();
            }
        );
}

function run1stScreen() {
    let textContent = "Assignment: 14C.01.05 GTA intro";
    text_content.classList.add("intro_text");

    typewriterEffect(textContent);
}

function typewriterEffect(text) {
    if (index <= text.length) {
        console.log(text);
        text_content.textContent = text.substring(0, index);
        index++;
        setTimeout(function() {
    typewriterEffect(text);
            }
    , 200);
    }
}