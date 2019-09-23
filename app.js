
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

//NAV ON SCROLL//

$(window).scroll({
    previousTop: 0
},

function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $("header").slideUp();
    } else {
        $("header").slideDown();
    }
    this.previousTop = currentTop;
});
