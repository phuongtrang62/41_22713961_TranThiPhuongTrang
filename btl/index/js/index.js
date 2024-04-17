 // Carousel
 const carousel = document.querySelector('.carousel');
 const carouselImages = document.querySelectorAll('.carousel-image');
 const arrows = document.querySelectorAll('.arrow');
 const indicatorDots = document.querySelectorAll('.indicator-dot');

 let currentSlide = 0;

 function setActiveIndicatorDot(index) {
   indicatorDots.forEach(dot => dot.classList.remove('active'));
   indicatorDots[index].classList.add('active');
 }

 function goToSlide(index) {
   carousel.style.transform = `translateX(-${index * 100 / 3}%)`;
   setActiveIndicatorDot(index);
   currentSlide = index;
 }

 function nextSlide() {
   if (currentSlide === 2) {
     goToSlide(0);
   } else {
     goToSlide(currentSlide + 1);
   }
 }

 function prevSlide() {
   if (currentSlide === 0) {
     goToSlide(2);
   } else {
     goToSlide(currentSlide - 1);
   }
 }

 arrows.forEach(arrow => {
   arrow.addEventListener('click', () => {
     if (arrow.classList.contains('left')) {
       prevSlide();
     } else {
       nextSlide();
     }
   });
 });

 indicatorDots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
     goToSlide(index);
   });
 });

