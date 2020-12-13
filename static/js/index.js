
function makeSound(key) {
    switch (key) {
        case 'w':
            let crash = new Audio('../static/sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            let kickBass = new Audio('../static/sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case 's':
            let snare = new Audio('../static/sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            let tom1 = new Audio('../static/sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            let tom2 = new Audio('../static/sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            let tom3 = new Audio('../static/sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            let tom4 = new Audio('../static/sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log('unknown event');
    }
}

/* ---------------- listening to keyboard --------------- */
document.addEventListener('keydown', (e) => {
    makeSound(e.key);
    btnAnimation(e.key);
});

/* -------------- listenning to mouse click ------------- */
let btn = document.querySelectorAll('.drum').length;
for (let i = 0; i < btn; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        let btnName = this.innerHTML;
        makeSound(btnName);
        btnAnimation(btnName);
    });
}

/* ------ animation on click or keypress ----- */

function btnAnimation(key) {
    let activeBtn = document.querySelector('.' + key);
    activeBtn.classList.add('pressed');
    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 100);
}