const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current'); //dodaje current na sljedeci sibling
    }else{
        slides[0].classList.add('current'); //dodaje current na prvi slajd ako se doslo do zadnjeg
    }

    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current'); //dodaje current na sljedeci sibling
    }else{
        slides[slides.length-1].classList.add('current'); //dodaje current na prvi slajd ako se doslo do zadnjeg
    }

    setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e =>{
    nextSlide();
    if(auto){//ciscenje intervala jer ukoliko kliknemo potrebno je da ceka 5 sekundi za interval
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e =>{
    prevSlide();
    if(auto){//ciscenje intervala jer ukoliko kliknemo potrebno je da ceka 5 sekundi za interval
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//Automatski slide
if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}


// const slides = document.querySelectorAll('.slide');
// const next = document.querySelector('#next');
// const prev = document.querySelector('#prev');
// const auto = false; // Auto scroll
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//   // Get current class
//   const current = document.querySelector('.current');
//   // Remove current class
//   current.classList.remove('current');
//   // Check for next slide
//   if (current.nextElementSibling) {
//     // Add current to next sibling
//     current.nextElementSibling.classList.add('current');
//   } else {
//     // Add current to start
//     slides[0].classList.add('current');
//   }
//   setTimeout(() => current.classList.remove('current'));
// };

// const prevSlide = () => {
//   // Get current class
//   const current = document.querySelector('.current');
//   // Remove current class
//   current.classList.remove('current');
//   // Check for prev slide
//   if (current.previousElementSibling) {
//     // Add current to prev sibling
//     current.previousElementSibling.classList.add('current');
//   } else {
//     // Add current to last
//     slides[slides.length - 1].classList.add('current');
//   }
//   setTimeout(() => current.classList.remove('current'));
// };

// // Button events
// next.addEventListener('click', e => {
//   nextSlide();
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// prev.addEventListener('click', e => {
//   prevSlide();
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// // Auto slide
// if (auto) {
//   // Run next slide at interval time
//   slideInterval = setInterval(nextSlide, intervalTime);
// }
