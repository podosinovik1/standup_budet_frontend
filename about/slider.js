const slider = document.querySelector('.slider');
const btnSliderLeft = document.querySelector('.left');
const btnSliderRight = document.querySelector('.right');

// ширина одного шага = ширина слайда + gap
function getStep() {
    const slide = slider.querySelector('.slide');
    if (!slide) return 0;

    const styles = getComputedStyle(slider);
    const gap = parseFloat(styles.gap) || 0;

    return slide.offsetWidth + gap;
}

slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
}, { passive: false });

slider.addEventListener('click', (e) => {
    const slide = e.target.closest('.slide');
    if (!slide) return;

    slide.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
    });
});

btnSliderLeft.addEventListener('click', () => {
    slider.scrollBy({
        left: -getStep(),
        behavior: 'smooth',
    });
});

btnSliderRight.addEventListener('click', () => {
    slider.scrollBy({
        left: getStep(),
        behavior: 'smooth',
    });
});
