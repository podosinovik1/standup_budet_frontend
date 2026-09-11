const bookButton = document.querySelectorAll('.booking-button');

bookButton.forEach(btn => {
    if (btn.dataset.tcEvent === "None") {
        btn.removeAttribute('data-tc-token');
        btn.removeAttribute('data-tc-event');

        btn.addEventListener('click', function () {
            window.location.href = "tel:+79518849845";
        });
    }
});
