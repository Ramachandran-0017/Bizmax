let left = document.querySelector(".leftSlider");
let right = document.querySelector(".rightSlider");

const slider = document.querySelector(".hero-slider");

console.log(slider);

function leftSlider() {
  // console.log("clicked");
  slider.style.transform = "translateX(0)";
}

function rightSlider() {
  console.log("clicked");
  slider.style.transform = "translateX(-100vw)";
}

// scroll animation function

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.addEventListener("scroll", showAnimation);

function showAnimation() {
  let items = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .serviceCard",
  );

  for (let i = 0; i < items.length; i++) {
    let position = items[i].getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      items[i].classList.add("show");
    }
  }
}
