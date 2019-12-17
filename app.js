

//NAV//
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');

      //Animate links
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation =''
        } else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
        }
      });
      //Burger Animation
      burger.classList.toggle('toggle');
  });

  nav.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');

      //Animate links
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation =''
        } else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
        }
      });
      //Burger Animation
      burger.classList.toggle('toggle');
  });
}

  navSlide();
//!NAV//

// Arrrow Scroll //
const arrowScroll = () =>{
  const arrow = document.querySelector('#arrow-down');
  const landing = document.querySelector('.carousel');

  arrow.addEventListener('click', ()=> {
    landing.scrollIntoView();
  })
};

arrowScroll();
// !Arrrow Scroll//

//NAV HIDE-REVEAL//
window.onscroll = function(e) {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('nav');
    var height = -header.clientHeight;
    header.style.transition = 'transform 0.4s';

    (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 924 || this.loaded === undefined)
      ? header.style.transform = 'translateY(0px)'
      : header.style.transform = 'translateY(' + height + 'px)'

    this.lastScroll = scrollY;
    this.loaded = true;
}

//!NAV HIDE-REVEAL//
