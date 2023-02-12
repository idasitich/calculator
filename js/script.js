const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');

let inputsString = '';
let operator = '';
let number1 = 0;
let number2 = 0;

const rinseWell = () => screen.textContent = "";

const reset = () => {
    screen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
    inputsString = '';
};

const mathOperation = (number1, operator, number2) => {
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = (number2 != 0)? (number1 / number2): 'Please, not divide by 0';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}
 
document.querySelectorAll('.yellow').forEach(button => {
    button.addEventListener('click', () => {
        screen.textContent += button.value;
        inputsString += button.value;
        keyscreen.textContent +=inputsString;
})});

document.querySelectorAll('.purple').forEach(button => {
    button.addEventListener('click', () => {
        number1 = Number(screen.textContent);
        operator = button.value;
        inputsString += button.value;
        keyscreen.textContent +=inputsString;
        rinseWell();
})});

equals.addEventListener("click", () => {
    number2 = Number(screen.textContent);
    if(isNaN(number1)) {screen.textContent = 'Error, Invalid Numbers';};
    console.log(number2);
    screen.textContent = mathOperation(number1, operator, number2);
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));






