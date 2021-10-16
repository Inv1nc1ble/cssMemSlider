document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.slider-wrapper');
    const sliderInner = document.querySelector('.slider-inner');
    const slides = document.querySelectorAll('.slider-item');
    

    const phrases = [
        'Be cute as a Duck',
        'Be bright as a Duck',
        'Fly as a Duck',
        'Have a Family as a Duck',
        'Be beautiful as a Duck',
    ];


    const wrapperWidth = window.getComputedStyle(wrapper).width;
    let slideIndex = 1;
    let offset = 0;

    sliderInner.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = wrapperWidth;
    });

    sliderInner.style.transform = `translateX(-0px)`;




});