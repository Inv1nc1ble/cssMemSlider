document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.slider-wrapper');
    const title = document.querySelector('.slider-title');
    const sliderInner = document.querySelector('.slider-inner');
    const slides = document.querySelectorAll('.slider-item');
    const controls = document.querySelectorAll('.control-item');
    const dots = document.querySelectorAll('.control-item-dot');
    

    const phrases = [
        'Be cute as a Duck',
        'Quack as a Duck',
        'Fly as a Duck',
        `Don't mess with a Duck` ,
        'Be beautiful as a Duck',
    ];
    title.textContent = phrases[0];

    const wrapperWidth = window.getComputedStyle(wrapper).width;
    let slideIndex = 1;
    let offset = 0;

    sliderInner.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = wrapperWidth;
    });

    function removeActiveDots() {
        dots.forEach(dot => {
            if (dot.classList.contains('active')) {
                dot.classList.remove('active')
            }
        });
    }

    function setTitle(i) {
        title.classList.add('hide');
        setTimeout(function() {
            title.textContent = phrases[i];
        }, 500);
        setTimeout(function() {
            title.classList.remove('hide');
        }, 500);
        
        
    }

    controls.forEach((control, i) => {
        control.addEventListener('click', () => {
            let w = +wrapperWidth.slice(0,wrapperWidth.length-2);
            offset = i * w;
            sliderInner.style.transform = `translateX(-${offset}px)`;

            if (!dots[i].classList.contains('active')) {
                removeActiveDots();
                setTitle(i);
                dots[i].classList.add('active');
            }
        })
    })


});