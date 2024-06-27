
let factoryVid = document.getElementById('factory-vid');


   



  const products = document.getElementById("products");
  const contact = document.getElementById("contact");
  const productsScroll = document.getElementById("productsScroll");
  const contactScroll = document.getElementById("contactScroll");


  productsScroll.addEventListener("click", () => {
    
    products.scrollIntoView({ behavior: "smooth", block: "center" });
  })

  contactScroll.addEventListener("click", () => {
      contact.scrollIntoView({behavior: "smooth"});
    })
  

   