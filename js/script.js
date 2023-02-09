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

const inputsArray = [];


// document.getElementById('start_button').addEventListener("click", () =>{
//     document.querySelector('.to_play_hidden').className= 'to_play_show';
//     document.querySelector('.to_play_show').className='hide';
//  });

// seven.addEventListener("click", () => {
//     const digitSeven = parseInt(seven.value)
//     const number1234 = parseInt('1234');
//     console.log('seven value', typeof seven.value, typeof number1234, number1234);
// });

function mathOperation (number1, operator, number2){
    let result = 0;
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
            result = 'Please, enter right operators';
      }
    return result;
}
 

function makeFirstNumber(stringNumber) {
    const dotTimes = stringNumber.split('.').length-1;
    const lineTimes = stringNumber.split('-').length-1;
    if(dotTimes > 1 || lineTimes > 1) {'Only valid numbers';};
    if(lineTimes == 1 && stringNumber.charAt(0) != 0) {'Only valid numbers';};
    return Number(stringNumber);
}

function takingInputs() {
    const inputChain = [];
    document.querySelectorAll("click", (button) => {
        inputChain.push(button.value);
    })
    return inputChain;
}

function consider





//is someone press 4-5 
//if someone press -4-5
//if someone press -4.33-5-7-8-9
//if 4-5+7/9*2

// function takingParameters(inputsArray){
//     const chain = [...inputsArray];
//     if(chain[0] == '-' o regex de digitos){
//         chain.forEach((char) => chain.filter(char matches con un regex de simbolos )
//         return indexOf(char))
//         let numeroString = chain.splice(posicion0 y simbolo)
//         let primerNumero = Number(numeroString);
//         operando = chain(indexOfChar)

//     }
    

// }