const box = document.getElementById('box');
const showImgBoxChild = document.getElementById('showImgBox_child');
const popUp = document.getElementById('popUp');
const close = document.getElementById('close');
let showImgBox = document.querySelector('.showImgBox');

box.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {

        let currImg = e.target.src;
        showImgBoxChild.src = currImg;

        popUp.classList.add('show');
        setTimeout(() => {
            // Delay opacity change for smooth image appearance
            showImgBox.style.opacity = 1;
        }, 50); // A small delay for smooth fade-in of image
    }
});

close.addEventListener('click', () => {

    showImgBox.style.opacity = 0;

    // Remove 'show' class after the fade-out transition is completed
    setTimeout(() => {
        popUp.classList.remove('show');
    }, 300); // Match the timing of the fade-out effect
});
