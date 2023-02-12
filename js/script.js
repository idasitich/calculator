const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');

let inputsString = '';
let number1;
let operator;
let number2;
// const isNumber = (str) => (str.match(/^[-+]?([0-9]*(\.?)[0-9])+$/)!=null);
const isNumber = (str) => (str.match(/^([0-9]*(\.?)[0-9])+$/)!=null);
const isDigit = (str) => (str.match(/^[0-9]+$/)!=null);
const isPoint = (str) => (str.match(".")!=null);
const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');


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
            result = number2 != 0? number1 / number2: 'Error';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}
 
const makeFirstNumber = (stringNumber) => {
    const dotTimes = stringNumber.split('.').length-1;
    const lineTimes = stringNumber.split('-').length-1;
    if(dotTimes > 1 || lineTimes > 1) {'Only valid numbers';};
    if(lineTimes == 1 && stringNumber.charAt(0) != 0) {'Only valid numbers';};
    return Number(stringNumber);
}

document.querySelectorAll('.yellow').forEach(button => {
    button.addEventListener('click', () => {
        screen.textContent += button.value;
})});

document.querySelectorAll('.purple').forEach(button => {
    button.addEventListener('click', () => {
        number1 = Number(screen.textContent);
        console.log(number1);
        operator = button.value;
        console.log(operator);
        rinseWell();
})});

equals.addEventListener("click", () => {
    number2 = Number(screen.textContent);
    screen.textContent = mathOperation(number1, operator, number2);

});

ac.addEventListener('click', () => reset());

const rinseWell = () => screen.textContent = "";

const reset = () => {
    screen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
};

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));






