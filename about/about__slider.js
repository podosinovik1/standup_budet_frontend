const galleryImage = document.querySelectorAll('.gallery-image');
const slides = document.querySelectorAll('.slide');        // ← было slide (NodeList)
const mainImage = document.querySelector('.main-image');    // ← один элемент, не querySelectorAll

// Обмен ссылками между main-image и кликнутым slide
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        if (!mainImage) return;

        const slideImg = slide.querySelector('img');
        if (!slideImg) return;

        // запоминаем текущие src
        const mainSrc = mainImage.src;
        const slideSrc = slideImg.src;

        // меняем местами
        mainImage.src = slideSrc;
        slideImg.src = mainSrc;
    });
});

// Остальная логика (превью по клику на .gallery-image) — без изменений
galleryImage.forEach(img => {
    img.addEventListener('click', () => {
        const imgOverlay = document.createElement('div');   // ← div, а не overlay
        imgOverlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.8);
            cursor: pointer;
        `;

        document.querySelectorAll('.gallery-preview').forEach(el => el.remove());

        const imgClone = img.cloneNode(true);
        imgClone.classList.remove('gallery-image');
        imgClone.classList.add('gallery-preview');

        imgClone.addEventListener('click', () => {
            imgClone.remove();
            imgOverlay.remove();
        });
        imgOverlay.addEventListener('click', () => {
            imgClone.remove();
            imgOverlay.remove();
        });

        imgClone.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: auto;
            max-width: 90vw;
            max-height: 90vh;
            object-fit: contain;
            z-index: 1001;
            cursor: pointer;
        `;

        document.body.appendChild(imgOverlay);
        document.body.appendChild(imgClone);
    });
});