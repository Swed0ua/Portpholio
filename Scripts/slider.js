let idSlide = 3;
let slider = document.getElementsByClassName('slide');
let currentS = document.getElementsByClassName('currentIdSlide');

function nextSlide(n) {
    slider[idSlide].classList.remove('this__slide');
    currentS[idSlide].classList.remove('thisCurrentId');
    idSlide += n;
    
    sliderGear(idSlide);
}

function current(n){
    slider[idSlide].classList.remove('this__slide');
    currentS[idSlide].classList.remove('thisCurrentId');
    idSlide = n;

    sliderGear(idSlide);
}

function sliderGear (n) {
    
    if (idSlide == slider.length){
        idSlide = 0;
    }
    if (idSlide == -1){
        idSlide = slider.length -1;
    }

    slider[idSlide].classList.add('this__slide');
    currentS[idSlide].classList.add('thisCurrentId');
}