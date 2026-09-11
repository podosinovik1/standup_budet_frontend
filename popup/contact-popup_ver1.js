const bookButton = document.querySelectorAll('.booking-button');
const closeButtons = document.querySelectorAll('.close-button');
const overlay = document.querySelector('.overlay');


bookButton.forEach(btn => {
    btn.onclick = () => {
        if (btn.dataset.tcEvent) {
            overlay.style.display = 'flex';
        }
    }
});

closeButtons.forEach(btn => {
    btn.onclick = () => {
        overlay.style.display = 'none';
    }
});