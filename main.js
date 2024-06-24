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
            pomBt.classList.add('ativa');   
            break;

        case 'Numpad8':
            clapBt.dispatchEvent(new Event('click'));
            clapBt.classList.add('ativa');
            break;

        case 'Numpad9':
            timBt.dispatchEvent(new Event('click'));
            timBt.classList.add('ativa');
            break;  
            
        case 'Numpad4':
            puffBt.dispatchEvent(new Event('click'));
            puffBt.classList.add('ativa');
            break;  
            
        case 'Numpad5':
            splashBt.dispatchEvent(new Event('click'));
            splashBt.classList.add('ativa');
            break; 
            
        case 'Numpad6':
            toimBt.dispatchEvent(new Event('click'));
            toimBt.classList.add('ativa');
            break; 
            
        case 'Numpad1':
            pshBt.dispatchEvent(new Event('click'));
            pshBt.classList.add('ativa');
            break; 
            
        case 'Numpad2':
            ticBt.dispatchEvent(new Event('click'));
            ticBt.classList.add('ativa');
            break;  
            
        case 'Numpad3':
            tomBt.dispatchEvent(new Event('click'));
            tomBt.classList.add('ativa');
            break;     
        default:
            break;
    }
})

document.addEventListener('keyup', (evento) => {
    //console.debug(evento.code);

    switch (evento.code) {
        case 'Numpad7':
            pomBt.classList.remove('ativa');
            break;

        case 'Numpad8':
            clapBt.classList.remove('ativa');
            break;

        case 'Numpad9':
            timBt.classList.remove('ativa');
            break;  
            
        case 'Numpad4':
            puffBt.classList.remove('ativa');
            break;  
            
        case 'Numpad5':
            splashBt.classList.remove('ativa');
            break; 
            
        case 'Numpad6':
            toimBt.classList.remove('ativa');
            break; 
            
        case 'Numpad1':
            pshBt.classList.remove('ativa');
            break; 
            
        case 'Numpad2':
            ticBt.classList.remove('ativa');
            break;  
            
        case 'Numpad3':
            tomBt.classList.remove('ativa');
            break;     
        default:
            break;
    }
})
