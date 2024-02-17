/***********************web intro**************/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.15 });
tl.to(".slider", { x: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.75 }, "-=1");
//tl.fromTo(".big-text", { opacity: 2 }, { opacity: 0, duration: 1, delay: 2 }, "-=1");
/*******************navbar*********************/
function navResponsive() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-collapse") {
      x.className += " responsive";
    } else {
      x.className = "nav-collapse";
    }
} 

function hamAnimate(x) {
    x.classList.toggle("change");
}

/**********************typerwriter*************/
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Inspire.", "Empower.", "Impact."];
const typingDelay = 200;
const erasingDelay = 150;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*********************landing section*********/
let sections = document.querySelectorAll(".section");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}
