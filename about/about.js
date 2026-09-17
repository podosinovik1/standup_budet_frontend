document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', () => {

        const imgOverlay = document.createElement('overlay');
        imgOverlay.style.cssText = `
            position: absolute;
            right: 0; top: 0;
            text-align: right;
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
            font-size: clamp(10px, 1.05vw, 1.5vw);
            padding-right: 8%;
            font-weight: 900;
            text-transform: uppercase;
            background: linear-gradient(90deg, rgba(128, 128, 128, 0.1) 0%);
            border: 0;
            height: 100%; width: 100%;
            border-radius: 7px;
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
            z-index: 1000;
            cursor: pointer;
        `;

        document.body.appendChild(imgClone);
        document.body.appendChild(imgOverlay);
    });
});