const mainImageContainer = document.querySelector('.main-image');
const mainImage = mainImageContainer.querySelector('img');
const slides = document.querySelectorAll('.slide');

// Если у главной картинки нет src — ставим случайный слайд
if (!mainImage.getAttribute('src') && slides.length) {
    const randomSlide = slides[Math.floor(Math.random() * slides.length)];
    const sourceImg = randomSlide.querySelector('img');
    if (sourceImg) mainImage.src = sourceImg.src;
}

// Клик по слайду — подменяем главную
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        const slideImg = slide.querySelector('img');
        if (slideImg) mainImage.src = slideImg.src;
    });
});

// Превью по клику на главную
function openPreview(sourceImg) {
    document.querySelectorAll('.gallery-preview, .gallery-overlay').forEach(el => el.remove());

    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.8);
        cursor: pointer;
    `;

    const clone = sourceImg.cloneNode(true);
    clone.classList.add('gallery-preview');

    const close = () => {
        clone.remove();
        overlay.remove();
    };

    clone.addEventListener('click', close);
    overlay.addEventListener('click', close);

    document.body.appendChild(overlay);
    document.body.appendChild(clone);
}

mainImage.addEventListener('click', () => openPreview(mainImage));