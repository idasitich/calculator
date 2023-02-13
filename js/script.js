const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');

let inputsString =[];
let operator;
let number1;
let number2;

const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');

const rinseWell = () => screen.textContent = "";

// const controlDecimals = (str) => {
//     let whereDot = str.indexOf('.');
//     let decPart = str.slice(whereDot);
//     let lenDecPart = decPart.length;
//     if(lenDecPart > 6 ){
//         decPart = decPart.slice(0, 7);
//         return str.slice(0, whereDot) + '.' + decPart;
//     }
//     return str;
// }

// const controlBeginZeros = (str) => {
//     let whereO = str.indexOf('0');
//     let whereDot = str.indexOf('.');
//     if((whereDot-whereO == 1 && whereO == 0 ) || whereO != 0){
//         return str;
//     }
//     return controlBeginZeros(str.slice(1));
// }

// const controlSign = (array, i) => {
//     if (!isNaN(array[i]) && array[i-1] == '-' && (!isNaN(array[i-2]) || !array[i-2] )) { return array[i] * -1}
//     return array[i]
// }


const reset = () => {
    screen.className= '';
    screen.textContent = '';
    keyscreen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
    inputsString = [];
    negativize = 1;
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
            result = (number2 != 0)? (number1 / number2): 'Please, do not divide by 0';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}
 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        if(screen.textContent == '0' && button.value == '0'){ return; }
        else{
            screen.textContent += button.value;
            inputsString.push(button.value);
            console.log(inputsString);
            keyscreen.textContent =inputsString.join('');
        }
})});

document.querySelectorAll('.purple').forEach(button => {
        screen.className= '';
        button.addEventListener('click', () => {
            if(button.value == '-'){
                if(screen.textContent.length == 0){ 
                    screen.textContent = button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                }
                else if((screen.textContent == '' || isOperator(screen.textContent.charAt(-1)))){
                    screen.textContent += button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                } else {
                    number1 = Number(screen.textContent).toFixed(6);
                    operator= button.value
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                    console.log('screen_after_operator', screen.textContent)
                    console.log('number1_after_operator', number1)
                    console.log('number2_after_operator', number2)
                    console.log('operator_after_operator', number2)
                    rinseWell();
                }
                
            } else if( button.value == '+'){
                console.log('my prev screen with +', inputsString.at(-1));
                console.log('-1', inputsString.at(-1));
                if(!isOperator(inputsString.at(-1))) {
                    number1 = Number(screen.textContent).toFixed(6);
                    operator= button.value
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                   
                    console.log('screen_after_operator', screen.textContent)
                    console.log('number1_after_operator', number1)
                    console.log('number2_after_operator', number2)
                    console.log('operator_after_operator', number2)
                    rinseWell();
                } else {
                    screen.textContent = screen.textContent 
                    inputsString.push();
                    keyscreen.textContent =inputsString.join('');
                }
            }
            else {
                number1 = Number(screen.textContent).toFixed(6);
                operator= button.value
                inputsString.push(button.value);
                keyscreen.textContent =inputsString.join('');
                console.log('screen_after_operator', screen.textContent)
                console.log('number1_after_operator', number1)
                console.log('number2_after_operator', number2)
                console.log('operator_after_operator', number2)
                rinseWell();
            }
    })});


equals.addEventListener("click", () => {
    screen.className= '';
    number2 = Number(screen.textContent).toFixed(6);
    
    let result = (number1 && operator && number2)? mathOperation(number1, operator, number2).toFixed(6): 'invalid operation';
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = (isNaN(result) && result != 'Please, not divide by 0')? 'Error, Invalid Numbers': result;
    screen.textContent = result;
    console.log('screen_after_equals', screen.textContent)
    console.log('number1_after_equals', number1)
    console.log('number2_after_equals', number2)
    console.log('result', result)
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));