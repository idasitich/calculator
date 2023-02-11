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

let inputsString = '';
const inputParameters = [];
//split in termns tiene que partir el string en terminos y rebotar un resultado.
//ese resultado tiene que ser el primer item de inputsarray, en consecuencia hay que sacarle todos los items y ponerle solo este resultado.
const isNumber = (str) => (str.match(/^[-+]?([0-9]*(\.?)[0-9])+$/)!=null);
const isDigit = (str) => (str.match(/^[0-9]+$/)!=null);
const isPoint = (str) => (str.match(".")!=null);
const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');


const splittingTerms = (inputString) => {
    const termsArray = []
    for( char in inputString) {
        if (isOperator(char)){
            let number = '';
            let operator = '';
            number = inputString.substring(0, char);
            termsArray.push(number);
            operator = char;
            termsArray.push(operator);
            inputString -= inputString.substring(0, char+1);
            console.log('inputstring', inputstring);
        }
    }
    return termsArray;
} 


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
            result = (number!= 0)? number1 / number2: 'Error';
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

// console.log(array1.findIndex(isOperator));

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
    if(button.value != '=' ){
        inputsString+= button.value;
        console.log('mi string', inputsString);
    }
    if(button.value == '='){
        splittingTerms(inputsString);
    }
})});