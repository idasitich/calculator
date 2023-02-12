const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');

let inputsString;
let operator;
let number1;
let number2;

const rinseWell = () => screen.textContent = "";

const reset = () => {
    screen.className= '';
    screen.textContent = '';
    keyscreen.textContent = '';
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
    screen.className= '';
    button.addEventListener('click', () => {
        screen.textContent += button.value;
        inputsString += button.value;
        keyscreen.textContent =inputsString;
})});

document.querySelectorAll('.purple').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        number1 = Number(screen.textContent);
        operator = button.value;
        inputsString += button.value;
        keyscreen.textContent =inputsString;
        rinseWell();
})});

equals.addEventListener("click", () => {
    screen.className= '';
    number2 = Number(screen.textContent);
    let result = mathOperation(number1, operator, number2);
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = (isNaN(result) && result != 'Please, not divide by 0')? 'Error, Invalid Numbers': result;
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));