var nav_links = document.querySelector(".nav_links")
function openNav() {
   nav_links.classList.toggle("showNav")
}
var slideIndex = 1;
mySlider(1);

function arrowLeft(n) {
   mySlider(slideIndex += n)
}
function myDot(n) {
   mySlider(slideIndex = n)
}
function mySlider(n) {
   var slider_content = document.querySelectorAll('.slider_content');
   var slider_dots = document.querySelectorAll(".slider_dots_container  button")
   var i;
   if (slideIndex > slider_content.length) { slideIndex = 1 }
   if (slideIndex < 1) { slideIndex = slider_content.length }
   for (i = 0; i < slider_content.length; i++) {
      slider_content[i].style.display = 'none';
   }
   for (i = 0; i < slider_dots.length; i++) {
      slider_dots[i].style.backgroundColor = '';
   }
   slider_content[slideIndex - 1].style.display = 'flex';
   slider_dots[slideIndex - 1].style.backgroundColor = '#1477c2b2'

}
// myFunction()
createOffsets();
window.addEventListener("resize", createOffsets);



function createOffsets() {
   var matcScreen = window.matchMedia('(max-width: 700px)');
   var matcScreen1 = window.matchMedia('(max-width:400px)');
   console.log(matcScreen)
   var slideNum = 3;

   if (matcScreen.matches) {

      slideNum = 2;
   } else {
      slideNum = 3
   }
   if (matcScreen1.matches) {
      slideNum = 1
   } else if (matcScreen.matches) {
      slideNum = 2
   } else {
      3
   }

   var swiper = new Swiper(".mySwiper", {
      slidesPerView: slideNum,
      spaceBetween: 15,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });

}








   // var swiper = new Swiper(".mySwiper", {
   //    slidesPerView:createOffsets(),
   //    spaceBetween: 15,
   //    navigation: {
   //       nextEl: ".swiper-button-next",
   //       prevEl: ".swiper-button-prev",
   //    },
   //    pagination: {
   //       el: ".swiper-pagination",
   //       clickable: true,
   //    },
   // });





