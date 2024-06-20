const pomBt = document.querySelector('.tecla_pom');
const clapBt = document.querySelector('.tecla_clap');
const timBt = document.querySelector('.tecla_tim');
const puffBt = document.querySelector('.tecla_puff');
const splashBt = document.querySelector('.tecla_splash');
const toimBt = document.querySelector('.tecla_toim');
const pshBt = document.querySelector('.tecla_psh');
const ticBt = document.querySelector('.tecla_tic');
const tomBt = document.querySelector('.tecla_tom');

pomBt.addEventListener('click', () => {
    const somPom = new Audio('./sounds/pom.wav');
    somPom.play();
});

clapBt.addEventListener('click', () => {
    const somClap = new Audio('./sounds/clap.wav');
    somClap.play();
});

timBt.addEventListener('click', () => {
    const somTim = new Audio('./sounds/tim.wav');
    somTim.play();
});

puffBt.addEventListener('click', () => {
    const somPuff = new Audio('./sounds/puff.wav');
    somPuff.play();
});

splashBt.addEventListener('click', () => {
    const somSplash = new Audio('./sounds/splash.wav');
    somSplash.play();
});

toimBt.addEventListener('click', () => {
    const somToim = new Audio('./sounds/toim.wav');
    somToim.play();
});

pshBt.addEventListener('click', () => {
    const somPsh = new Audio('./sounds/psh.wav');
    somPsh.play();
});

ticBt.addEventListener('click', () => {
    const somTic = new Audio('./sounds/tic.wav');
    somTic.play();
});

tomBt.addEventListener('click', () => {
    const somTom = new Audio('./sounds/tom.wav');
    somTom.play();
});

document.addEventListener('keydown', (evento) => {
    console.debug(evento.code);

    switch (evento.code) {
        case 'Numpad7':
            pomBt.dispatchEvent(new Event('click'));
            break;

        case 'Numpad8':
            clapBt.dispatchEvent(new Event('click'));
            break;

        case 'Numpad9':
            timBt.dispatchEvent(new Event('click'));
            break;  
            
        case 'Numpad4':
            puffBt.dispatchEvent(new Event('click'));
            break;  
            
        case 'Numpad5':
            splashBt.dispatchEvent(new Event('click'));
            break; 
            
        case 'Numpad6':
            toimBt.dispatchEvent(new Event('click'));
            break; 
            
        case 'Numpad1':
            pshBt.dispatchEvent(new Event('click'));
            break; 
            
        case 'Numpad2':
            ticBt.dispatchEvent(new Event('click'));
            break;  
            
        case 'Numpad3':
            tomBt.dispatchEvent(new Event('click'));
            break;     
        default:
            break;
    }
})
