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
    switch (operator) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2;
            break;
        case '/':
            return (number!= 0)? number1 / number2: 'Please, the divider should be different than 0';
            break;
        default:
            return 'Please, enter right operators';
      }
}
 

function makeNumbers(stringNumber) {
    // const beggining = stringNumber.charAt(0);
    // if(beggining == '-'){ }
    let convertedNumber = 0;
    const dotTimes = stringNumber.split('.').length-1;
    if(dotTimes > 1) {'Please, enter valid numbers';};
    if( dotTimes == 1 ) {
        // convertedNumber = parseFloat(stringNumber);
        convertedNumber = Number(stringNumber);
    }
    stringNumber.includes("world");
    
}
