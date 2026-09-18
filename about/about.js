document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', () => {

        const imgOverlay = document.createElement('overlay');
        imgOverlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 1000;
            font-size: clamp(10px, 1.05vw, 1.5vw);
            background: linear-gradient(90deg, rgb(0, 0, 0, 0.8) 0%);
            height: 100%; width: 100%;
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
            z-index: 1001;
            cursor: pointer;
        `;

        document.body.appendChild(imgClone);
        document.body.appendChild(imgOverlay);
    });
});