
/***********************web intro**************/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.15 });
tl.to(".slider", { x: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.75 }, "-=1");
//tl.fromTo(".big-text", { opacity: 2 }, { opacity: 0, duration: 1, delay: 2 }, "-=1");
/*******************navbar*********************/

//navbar collapse when viewed on small screen
function navResponsive() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-collapse") {
      x.className += " responsive";
    } else {
      x.className = "nav-collapse";
    }
} 


//navbar ham icon animation
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

// Define the colors
const colors = ["rgb( 255, 151, 65 )", "rgb(256, 256, 256)", "rgb(38, 208, 0)"];
let currentColorIndex = 0; // Initialize the color index

function type() {
  // Change color only when typing a new word
  if (charIndex === 0) {
    typedTextSpan.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex = (textArrayIndex + 1) % textArray.length; // Move to the next word
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
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


//counter increment functionality

let element = document.querySelector('.counter-wrapper');

// Get its bounding client rectangle
let bounding = element.getBoundingClientRect();

function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();
  
  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      // bounding.top >= 0 &&
      // bounding.left >= 0 &&
      // bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      // bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      bounding.top <= (window.innerHeight|| document.documentElement.clientHeight)
  ) {
      console.log('In the viewport! :)');
      return true;
  } else {
      console.log('Not in the viewport. :(');
      return false;
  }
}

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
})

function countAnim(){
  counters.forEach((counter) => {

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 800;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 5);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
    }
  )
}

window.addEventListener('scroll', function counterView(event) {
  if (isInViewport(element)) {
    countAnim();
  }
}, false);
