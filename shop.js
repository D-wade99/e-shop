let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
   loginform.classList.remove('active');
    navbar.classList.replace('independent', 'navbar');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>{
    shoppingcart.classList.toggle('active');
    loginform.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.replace('independent', 'navbar');
    
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() =>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.replace('independent', 'navbar');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.replace('navbar', 'independent');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll =() =>{
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.replace('independent', 'navbar');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4,
      },
    },
  });