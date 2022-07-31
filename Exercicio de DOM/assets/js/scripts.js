function changeMode() {
    changeClasses();
    changeText();
    changeRain();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeRain() {
    button.classList.toggle(chuvaMode);
    h1.classList.toggle(chuvaMode);
    body.classList.toggle(chuvaMode);
    footer.classList.toggle(chuvaMode);
}

function changeText () {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    const rainMode = "Noite de Chuva";
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    else if (body.classList.contains(chuvaMode)){
        button.innerHTML = rainMode;
        h1.innerHTML = rainMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const chuvaMode = 'rain-mode';
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)