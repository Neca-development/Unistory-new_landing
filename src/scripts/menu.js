import 'vanilla-hamburger/twirl-burger.js'

const burger = document.querySelector('twirl-burger');
burger.addEventListener('pressed-changed', (event) => {
    const pressed = event.detail.value;
    console.log('%cMyProject%cline:5%cpressed', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px', pressed)
});