const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.15 });
tl.to(".slider", { x: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.75 }, "-=1");
//tl.fromTo(".big-text", { opacity: 2 }, { opacity: 0, duration: 1, delay: 2 }, "-=1");

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
      //bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
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

      const increment = target / 400;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
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
