var className = "scroll";
var scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(className);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
  }
};

var scroll = new SmoothScroll('a[href*="#"]');

const menu = document.getElementById("menu");
const navLinks = document.getElementById("showLinks");
const links = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
