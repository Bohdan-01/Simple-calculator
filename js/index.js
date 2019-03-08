const display = document.querySelector('.display');

document.querySelectorAll('.digits button, .opers button').forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(e) {
    display.value += e.target.innerText;
}

document.querySelector('.digits .clear').addEventListener('click', clearPressed);

function clearPressed() {
    display.value = '';
}

document.querySelector('.digits .decimal').addEventListener('click', inputDecimal);

function inputDecimal() {
    display.value += '';
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    display.value = eval(display.value);
}