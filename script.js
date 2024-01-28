const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.15 });
tl.to(".slider", { x: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.75 }, "-=1");
tl.fromTo(".big-text", { opacity: 2 }, { opacity: 0, duration: 1, delay: 2 }, "-=1");

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