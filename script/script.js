
const products = document.querySelector(".products");
const contact = document.querySelector(".contact");
const homeButton = document.querySelector(".homeButton");
const productsScroll = document.querySelector(".productsScroll");
const productsScroll2 = document.querySelector(".productsScroll2");
const contactScroll = document.querySelector(".contactScroll");
const contactScroll2 = document.querySelector(".contactScroll2");


productsScroll.addEventListener("click", () => {
  products.scrollIntoView({ behavior: "smooth", block: "center" });
})
productsScroll2.addEventListener("click", () => {
  products.scrollIntoView({ behavior: "smooth", block: "center" });
})

contactScroll.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
})
contactScroll2.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
})




const hamburgerButton = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu-placeholder');
const overlay = document.getElementById('overlay');


hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});







