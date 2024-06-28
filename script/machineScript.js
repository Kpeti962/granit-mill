const images = document.querySelectorAll('.machines-section img');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

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

const hamburger = document.getElementById('hamburgerOpen');
const mobileNavBar = document.getElementById('mobile-nav-bar');

hamburger.addEventListener('click', () => {
mobileNavBar.classList.remove('hidden');
mobileNavBar.classList.toggle('active');
});
if (window.innerWidth > 1080) {
mobileNavBar.classList.remove('active');

}

