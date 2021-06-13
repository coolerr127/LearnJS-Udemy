function slider({container, slide, next, prev, totalCounter, currentCounter, wrapper, field}) {

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prevBtn = document.querySelector(prev),
        nextBtn = document.querySelector(next),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIdx = 1;
    let offset = 0;

    //-----Variant 1-----

    // showSlide(slideIdx);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlide(idx) {
    //     if (idx > slides.length) {
    //         slideIdx = 1;
    //     } else if (idx < 1) {
    //         slideIdx = slides.length;
    //     }

    //     slides.forEach(item => item.classList.add('hide'));

    //     slides[slideIdx - 1].classList.add('show');
    //     slides[slideIdx - 1].classList.remove('hide');

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIdx}`;
    //     } else {
    //         current.textContent = slideIdx;
    //     }
    // }

    // function changeSlide(n) {
    //     showSlide(slideIdx += n);
    // }

    // prevBtn.addEventListener('click', () => {
    //     changeSlide(-1);
    // });

    // nextBtn.addEventListener('click', () => {
    //     changeSlide(1);
    // });

    //-----Variant 2-----

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    function changeDot() {
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[slideIdx - 1].style.opacity = 1;
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i === 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIdx}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIdx;
    }

    nextBtn.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translate(-${offset}px)`;

        if (slideIdx == slides.length) {
            slideIdx = 1;
        } else {
            slideIdx++;
        }

        if (slideIdx < 10) {
            current.textContent = `0${slideIdx}`;
        } else {
            current.textContent = slideIdx;
        }

        changeDot();
    });

    prevBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translate(-${offset}px)`;

        if (slideIdx == 1) {
            slideIdx = slides.length;
        } else {
            slideIdx--;
        }

        if (slideIdx < 10) {
            current.textContent = `0${slideIdx}`;
        } else {
            current.textContent = slideIdx;
        }

        changeDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIdx = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIdx}`;
            } else {
                current.textContent = slideIdx;
            }

            changeDot();
        });
    });
}

export default slider;