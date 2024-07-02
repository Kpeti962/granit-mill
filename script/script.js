
let factoryVid = document.getElementById('factory-vid');



  const hamburger = document.getElementById('hamburgerOpen');
  const mobileNavBar = document.getElementById('mobile-nav-bar');
  const overlay = document.getElementById('overlay');

  hamburger.addEventListener('click', () => {
    mobileNavBar.classList.remove('hidden');
    mobileNavBar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  if (window.innerWidth > 1080) {
    mobileNavBar.classList.remove('active');
    overlay.classList.remove('active');
  }


  const products = document.getElementById("products");
  const contact = document.getElementById("contact");
  const productsScroll = document.getElementById("productsScroll");
  const productsScroll2 = document.getElementById("productsScroll2");
  const contactScroll = document.getElementById("contactScroll");
  const contactScroll2 = document.getElementById("contactScroll2");


  productsScroll.addEventListener("click", () => {
    
    products.scrollIntoView({ behavior: "smooth", block: "center" });
  })
  productsScroll2.addEventListener("click", () => {
    
    products.scrollIntoView({ behavior: "smooth", block: "center" });
  })

  contactScroll.addEventListener("click", () => {
      contact.scrollIntoView({behavior: "smooth"});
    })
  contactScroll2.addEventListener("click", () => {
      contact.scrollIntoView({behavior: "smooth"});
    })
  

   