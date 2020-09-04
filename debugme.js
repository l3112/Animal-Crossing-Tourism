const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //get current class (the current photo)
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if(current.nextElementSibling){
        // + current to next sib
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to start
        slide[0].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'))
}


const prevSlide = () => {
    //get current class (the current photo)
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current')
    //check for prev slide
    if(current.previousElementSibling){
        // + current to prev sib
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to last
        slide[slides.length - 1].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'))
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  
  prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  
  // Auto slide
  if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  