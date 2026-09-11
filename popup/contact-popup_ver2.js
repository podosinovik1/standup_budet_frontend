const bookButton = document.querySelectorAll('.booking-button');

bookButton.forEach(btn => {
    if (btn.dataset.tcEvent === "None") {
        btn.removeAttribute('data-tc-token');
        btn.removeAttribute('data-tc-event');
        
        btn.textContent = "+79518849845";
        btn.style.setProperty('background-color', '#ffce00', 'important');
        btn.style.setProperty('border', 'none', 'important');
        btn.style.setProperty('position', 'relative', 'important');

        btn.addEventListener('click', function () {
            window.location.href = "tel:+79518849845";
        });

        const btnOverlay = document.createElement('button');
        btnOverlay.textContent = 'Показать';
        
        // Все стили одной строкой:
        btnOverlay.style.cssText = `
            position: absolute;
            right: 0; top: 0;
            text-align: right;
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
            font-size: clamp(10px, 1.05vw, 1.5vw);
            padding-right: 8%;
            font-weight: 900;
            text-transform: uppercase;
            background: linear-gradient(90deg, rgba(255, 206, 0, 0.1) 0%, #ffce00 50%);
            border: 0;
            height: 100%; width: 100%;
            border-radius: 7px;
            cursor: pointer;
        `;

        btnOverlay.addEventListener('click', function (e) {
            e.stopPropagation(); // Чтобы клик не ушел на родителя
            btnOverlay.style.display = 'none';
        });

        btn.appendChild(btnOverlay);
    }
});
