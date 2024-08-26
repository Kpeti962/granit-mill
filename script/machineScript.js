const images = document.querySelectorAll('.machines-section img');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');
const hamburgerButton = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu-placeholder');
const page = document.querySelector('.page');


hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  page.classList.toggle('overflow-hidden');
});
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modals[index].style.display = 'block';
  });
});

closeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


