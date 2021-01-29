var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',

  },

  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.neader');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('neder-activ');
})